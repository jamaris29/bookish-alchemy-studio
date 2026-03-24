<?php
// ============================================
//  Hostinger Reach Proxy — The Bestseller Blueprint
//  Auto-descubre el profileUuid via API, lo cachea
//  y luego registra el contacto en Reach.
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

// ── Configuración ──────────────────────────────────────────────────────────
// Token obtenido desde hPanel → Account settings → API
$api_token  = 'lLMvWMHHpHQhx3Dk5hXccEBrQMLvEe9eAtJ9D61cb94fb202';
$cache_file = __DIR__ . '/.profile_uuid_cache';
$log_file   = __DIR__ . '/subscribe_log.txt';
$log        = date('Y-m-d H:i:s') . " | Email: $email\n";

// ── Helper: hacer una petición HTTP con cURL o file_get_contents ───────────
function hostinger_request(string $method, string $url, string $token, ?string $body = null): array {
    $headers = [
        'Content-Type: application/json',
        'Accept: application/json',
        'Authorization: Bearer ' . $token,
    ];

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CUSTOMREQUEST  => $method,
            CURLOPT_HTTPHEADER     => $headers,
            CURLOPT_TIMEOUT        => 15,
            CURLOPT_SSL_VERIFYPEER => true,
        ]);
        if ($body !== null) {
            curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
        }
        $resp_body   = curl_exec($ch);
        $resp_status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curl_err    = curl_error($ch);
        curl_close($ch);
        return ['status' => $resp_status, 'body' => $resp_body, 'error' => $curl_err, 'method' => 'curl'];
    }

    // Fallback: file_get_contents
    $opts = [
        'http' => [
            'method'        => $method,
            'header'        => implode("\r\n", $headers) . ($body ? "\r\nContent-Length: " . strlen($body) : ''),
            'content'       => $body,
            'timeout'       => 15,
            'ignore_errors' => true,
        ],
        'ssl' => ['verify_peer' => true, 'verify_peer_name' => true],
    ];
    $ctx         = stream_context_create($opts);
    $resp_body   = @file_get_contents($url, false, $ctx);
    $resp_status = 0;
    if (isset($http_response_header)) {
        preg_match('/HTTP\/\d\.\d (\d+)/', $http_response_header[0], $m);
        $resp_status = isset($m[1]) ? (int) $m[1] : 0;
    }
    return ['status' => $resp_status, 'body' => $resp_body, 'error' => '', 'method' => 'file_get_contents'];
}

// ── Paso 1: Obtener profileUuid (de caché o de la API) ────────────────────
$profile_uuid = null;

if (file_exists($cache_file)) {
    $profile_uuid = trim(file_get_contents($cache_file));
    $log .= "ProfileUUID from cache: $profile_uuid\n";
}

if (!$profile_uuid) {
    $profiles_res = hostinger_request('GET', 'https://developers.hostinger.com/api/reach/v1/profiles', $api_token);
    $log .= "GET profiles | Status: {$profiles_res['status']} | Method: {$profiles_res['method']}\n";
    $log .= "Profiles body: " . substr($profiles_res['body'], 0, 400) . "\n";

    if ($profiles_res['status'] === 200) {
        $profiles_data = json_decode($profiles_res['body'], true);

        // La API puede devolver un array directo o un objeto con 'data'
        $profiles_list = isset($profiles_data['data']) ? $profiles_data['data'] : $profiles_data;

        if (!empty($profiles_list) && isset($profiles_list[0])) {
            // Intentamos distintos campos donde puede venir el UUID
            $first = $profiles_list[0];
            $profile_uuid = $first['uuid'] ?? $first['id'] ?? $first['profile_uuid'] ?? null;
        }

        if ($profile_uuid) {
            file_put_contents($cache_file, $profile_uuid);
            $log .= "ProfileUUID discovered & cached: $profile_uuid\n";
        } else {
            $log .= "ERROR: No se pudo extraer profileUuid del response.\n";
        }
    } else {
        $log .= "ERROR: No se pudo obtener profiles. Status: {$profiles_res['status']}\n";
    }
}

// ── Paso 2: Registrar el contacto ─────────────────────────────────────────
$result_status = 0;
$method_used   = 'none';

if ($profile_uuid) {
    $api_url = 'https://developers.hostinger.com/api/reach/v1/profiles/' . $profile_uuid . '/contacts';
    $payload = json_encode([
        'email' => $email,
        'note'  => 'Landing Page — The Bestseller Blueprint',
    ]);

    $contact_res   = hostinger_request('POST', $api_url, $api_token, $payload);
    $result_status = $contact_res['status'];
    $method_used   = $contact_res['method'];

    $log .= "POST contact | Status: $result_status | Method: $method_used\n";
    $log .= "Contact body: " . substr($contact_res['body'], 0, 300) . "\n";
} else {
    $log .= "SKIP: No profileUuid disponible, contacto NO enviado a Reach.\n";
}

$log .= "---\n";
file_put_contents($log_file, $log, FILE_APPEND | LOCK_EX);

// ── Paso 3: Responder al frontend ─────────────────────────────────────────
// Siempre devolvemos success=true para no bloquear la UX.
// El log muestra si hubo errores reales.
if ($result_status === 200 || $result_status === 201 || $result_status === 409) {
    echo json_encode(['success' => true, 'email' => $email, 'method' => $method_used, 'status' => $result_status]);
} else {
    echo json_encode(['success' => true, 'note' => 'saved_locally', 'status' => $result_status]);
}
