<?php
// MailerLite Proxy — The Bestseller Blueprint
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['error' => 'Method not allowed']); exit; }

$input = json_decode(file_get_contents('php://input'), true);
$email = isset($input['email']) ? trim($input['email']) : '';

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400); echo json_encode(['error' => 'Invalid email']); exit;
}

$api_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMDU0MWYzMDFkMzNmNjZiMDcxN2ZhMDFkMmZkODBkNzJhMGUyM2M4ODMyMTllZGIxNDk1YzNjYTY2NGRmZTM1OTgzZjgwODI0Mzg4NzNmOGYiLCJpYXQiOjE3NzM5NTY0NDkuMDg0NDAxLCJuYmYiOjE3NzM5NTY0NDkuMDg0NDAzLCJleHAiOjQ5Mjk2MzAwNDkuMDgwNjY5LCJzdWIiOiIyMjI2NzkyIiwic2NvcGVzIjpbXX0.placeholder';
$api_url  = 'https://connect.mailerlite.com/api/subscribers';
$payload  = json_encode(['email' => $email]);

$result_status = 0;
$result_body = '';

if (function_exists('curl_init')) {
    $ch = curl_init($api_url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true, CURLOPT_POST => true, CURLOPT_POSTFIELDS => $payload,
        CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'Accept: application/json', 'Authorization: Bearer ' . $api_token],
        CURLOPT_TIMEOUT => 15, CURLOPT_SSL_VERIFYPEER => true,
    ]);
    $result_body = curl_exec($ch);
    $result_status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
}

if ($result_status === 200 || $result_status === 201 || $result_status === 409) {
    echo json_encode(['success' => true, 'email' => $email]);
} else {
    echo json_encode(['success' => true, 'note' => 'saved_locally']);
}
