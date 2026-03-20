<?php
// ============================================
//  MailerLite Proxy — The Bestseller Blueprint
//  Hostinger-compatible (uses file_get_contents
//  as fallback if cURL is blocked)
// ============================================

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$email = isset($input['email']) ? trim($input['email']) : '';

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email']);
    exit;
}

$api_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMDU0MWYzMDFkMzNmNjZiMDcxN2ZhMDFkMmZkODBkNzJhMGUyM2M4ODMyMTllZGIxNDk1YzNjYTY2NGRmZTM1OTgzZjgwODI0Mzg4NzNmOGYiLCJpYXQiOjE3NzM5NTY0NDkuMDg0NDAxLCJuYmYiOjE3NzM5NTY0NDkuMDg0NDAzLCJleHAiOjQ5Mjk2MzAwNDkuMDgwNjY5LCJzdWIiOiIyMjI2NzkyIiwic2NvcGVzIjpbXX0.KsnH7XQhN1FOycjmrISYem72-TaTzBOAPZIWtS220n05rhHgC_szu1eOk5-3vRabSW9rLn9Vb0FV1x4wBJwDK0va9MU6tHcA1V9bAXjfJubKRmSgGQPtjay4fdMyTKa1YodU0nobU7rlby4_51Ouf7VqlvWc0eI2WJfomwrSZt3AEZMwOAwyw0TqnXuX3uma8Cv5xTtFJv6zb-fsS69wRa3Iz11mpMDwJrS78F8fVej8eVup6J3y1JM5LEFmmB8VNxuIG4dUqhZ8ObzByIhyRsWwZ9zOMLr0Vh6dwveXw9cKfSEED5Mh7aB7hhxlHS_zIzNWNu9v4zT7AGCevEgg0hdimHbmVe0ksYd1GQEGUbWh7dpWsqk1ma_CpfHrfb4mQ7zhdhmu3IjcpjtdCk9u2SfDTvPlmWistzuq0UZeyqel4oQWJsCVCqRncFXbmAXE22-77M_7NNb0dqz-aonbvjYOutAVP5HnhvCdFpILIG8xsGaSJRFqjKx3TA0Yt-lgYnQCbShu9b4ue9A4ukLnsagWgUlaVLYhzPHLM8zYfzqa874Vf0g0cgblI7DINdxGqCUZxUmsDktp9B8LsTgz0mpr_KzYP-gwzBf5wIptE_gjqLfqnZp-dVlbZ3wJJRjOvPiKl3anG81kLVmH9pwNcqzL67lfudXyJcxLdRPhw3k';
$api_url  = 'https://connect.mailerlite.com/api/subscribers';
$payload  = json_encode(['email' => $email]);

$log_file = __DIR__ . '/subscribe_log.txt';
$log      = date('Y-m-d H:i:s') . " | Email: $email\n";

// ---- METHOD 1: cURL ----
$result_body   = '';
$result_status = 0;
$method_used   = 'none';

if (function_exists('curl_init')) {
    $ch = curl_init($api_url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => $payload,
        CURLOPT_HTTPHEADER     => [
            'Content-Type: application/json',
            'Accept: application/json',
            'Authorization: Bearer ' . $api_token,
        ],
        CURLOPT_TIMEOUT        => 15,
        CURLOPT_SSL_VERIFYPEER => true,
    ]);
    $result_body   = curl_exec($ch);
    $result_status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curl_err      = curl_error($ch);
    curl_close($ch);
    $method_used = 'curl';
    $log .= "Method: cURL | Status: $result_status | Error: $curl_err\n";
} else {
    $log .= "cURL not available\n";
}

// ---- METHOD 2: file_get_contents fallback ----
if ($result_status === 0 || $result_body === false) {
    $opts = [
        'http' => [
            'method'  => 'POST',
            'header'  => implode("\r\n", [
                'Content-Type: application/json',
                'Accept: application/json',
                'Authorization: Bearer ' . $api_token,
                'Content-Length: ' . strlen($payload),
            ]),
            'content' => $payload,
            'timeout' => 15,
            'ignore_errors' => true,
        ],
        'ssl' => [
            'verify_peer'      => true,
            'verify_peer_name' => true,
        ],
    ];
    $context       = stream_context_create($opts);
    $result_body   = @file_get_contents($api_url, false, $context);
    $method_used   = 'file_get_contents';
    $result_status = 0;
    if (isset($http_response_header)) {
        preg_match('/HTTP\/\d\.\d (\d+)/', $http_response_header[0], $m);
        $result_status = isset($m[1]) ? (int) $m[1] : 0;
    }
    $log .= "Method: file_get_contents | Status: $result_status\n";
}

$log .= "Response body: " . substr($result_body, 0, 300) . "\n";
$log .= "---\n";
file_put_contents($log_file, $log, FILE_APPEND | LOCK_EX);

// Return result
if ($result_status === 200 || $result_status === 201 || $result_status === 409) {
    echo json_encode(['success' => true, 'email' => $email, 'method' => $method_used, 'status' => $result_status]);
} else {
    // Even if API failed, we tell the frontend success (graceful UX)
    // But log the real error
    echo json_encode(['success' => true, 'note' => 'saved_locally', 'status' => $result_status]);
}
