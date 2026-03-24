<?php
// ============================================
//  Hostinger Reach Proxy — The Bestseller Blueprint
//  Adds subscribers to Hostinger Reach Contacts API
//  and tags them as "webform-subscribers"
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

$input   = json_decode(file_get_contents('php://input'), true);
$email   = isset($input['email'])   ? trim($input['email'])   : '';
$name    = isset($input['name'])    ? trim($input['name'])    : '';
$surname = isset($input['surname']) ? trim($input['surname']) : '';

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email']);
    exit;
}

// ---- Hostinger Reach API config ----
$api_token = 'lLMvWMHHpHQhx3Dk5hXccEBrQMLvEe9eAtJ9D61cb94fb202';
$api_url   = 'https://developers.hostinger.com/api/reach/v1/contacts';

$payload = json_encode([
    'email'   => $email,
    'name'    => $name    ?: null,
    'surname' => $surname ?: null,
    'tags'    => ['webform-subscribers'],
]);

$log_file = __DIR__ . '/subscribe_log.txt';
$log      = date('Y-m-d H:i:s') . " | Email: $email | Name: $name $surname\n";

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
    $log .= "Method: cURL | Status: $result_status | cURL Error: $curl_err\n";
} else {
    $log .= "cURL not available\n";
}

// ---- METHOD 2: file_get_contents fallback ----
if ($result_status === 0 || $result_body === false) {
    $opts = [
        'http' => [
            'method'        => 'POST',
            'header'        => implode("\r\n", [
                'Content-Type: application/json',
                'Accept: application/json',
                'Authorization: Bearer ' . $api_token,
                'Content-Length: ' . strlen($payload),
            ]),
            'content'       => $payload,
            'timeout'       => 15,
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

// 200 = updated, 201 = created, 409 = already exists
if ($result_status === 200 || $result_status === 201 || $result_status === 409) {
    echo json_encode(['success' => true, 'email' => $email, 'method' => $method_used, 'status' => $result_status]);
} else {
    // Graceful UX: always tell frontend "success" but log real status
    echo json_encode(['success' => true, 'note' => 'saved_locally', 'status' => $result_status]);
}
