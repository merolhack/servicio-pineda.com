<?php
/**
 * Pineda Hydraulic - Contact Bridge API
 * Handles contact form submissions using SMTP for reliable delivery.
 */

// 1. Configuración de Seguridad y CORS
header("Access-Control-Allow-Origin: *"); 
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// 2. Cargar Variables de Entorno (.env)
// En HostGator, lo ideal es colocar el archivo .env en la raíz de tu cuenta (fuera de public_html)
// o en la raíz de la aplicación (/home/usuario/servicio-pineda.com/.env)
function loadEnv($path) {
    if (!file_exists($path)) return false;
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue;
        if (strpos($line, '=') !== false) {
            list($name, $value) = explode('=', $line, 2);
            $name = trim($name);
            $value = trim($value);
            // Eliminar comillas si existen
            $value = trim($value, "\"'");
            
            $_ENV[$name] = $value;
            putenv("$name=$value");
        }
    }
    return true;
}

// Intentar cargar desde el directorio raíz (asumiendo que estamos en public/api/)
loadEnv(__DIR__ . '/../../.env');

// 3. Definir API Key de Autorización (Debe coincidir con la del frontend)
define('API_AUTH_KEY', getenv('NEXT_PUBLIC_CONTACT_AUTH_KEY') ?: 'ph_auth_2026_secure_bridge'); 

// 4. Verificar Autorización
$headers = apache_request_headers();
$authHeader = isset($headers['Authorization']) ? $headers['Authorization'] : '';

if ($authHeader !== 'Bearer ' . API_AUTH_KEY) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "No autorizado."]);
    exit;
}

// 5. Obtener y Validar Datos
$input = json_decode(file_get_contents("php://input"), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Datos inválidos."]);
    exit;
}

$name = strip_tags(trim($input['name']));
$email = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
$company = isset($input['company']) ? strip_tags(trim($input['company'])) : 'N/A';
$phone = isset($input['phone']) ? strip_tags(trim($input['phone'])) : 'N/A';
$subject = strip_tags(trim($input['subject']));
$message = strip_tags(trim($input['message']));

if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Por favor, completa todos los campos requeridos."]);
    exit;
}

// 6. Configuración de SMTP
$smtp_host = getenv('SMTP_HOST') ?: 'smtp.titan.email';
$smtp_port = getenv('SMTP_PORT') ?: 465;
$smtp_user = getenv('SMTP_USER') ?: 'russell@servicio-pineda.com';
$smtp_pass = getenv('SMTP_PASS') ?: 'S3rvicio.P1neda';
$to = getenv('CONTACT_RECEIVER_EMAIL') ?: 'merolhack@gmail.com';

// Debug Mode Check
$debug_mode = (isset($_GET['debug']) || getenv('DEBUG_MODE') === 'true');

// Usaremos PHPMailer
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
$debug_output = "";

try {
    // Configuración del servidor
    if ($debug_mode) {
        $mail->SMTPDebug = 2; // 2 = client and server messages
        $mail->Debugoutput = function($str, $level) use (&$debug_output) {
            $debug_output .= "$level: $str\n";
        };
    }

    $mail->isSMTP();
    $mail->Host       = $smtp_host;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtp_user;
    $mail->Password   = $smtp_pass;
    
    // Configuración de Seguridad Dinámica
    if ($smtp_port == 465) {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; 
    } else {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    }
    
    $mail->Port       = $smtp_port;
    $mail->CharSet    = 'UTF-8';

    // Destinatarios
    $mail->setFrom($smtp_user, 'Pineda Hydraulic Web');
    $mail->addAddress($to);
    $mail->addReplyTo($email, $name);

    // Contenido
    $mail->isHTML(false);
    $mail->Subject = "[Contacto Web] $subject";
    
    $email_body = "Has recibido un nuevo mensaje desde el sitio web.\n\n";
    $email_body .= "Nombre: $name\n";
    $email_body .= "Empresa: $company\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Teléfono: $phone\n";
    $email_body .= "Asunto: $subject\n\n";
    $email_body .= "Mensaje:\n$message\n";
    
    $mail->Body = $email_body;

    $mail->send();
    
    // Logging
    if ($debug_mode) {
        file_put_contents(__DIR__ . '/log.txt', "[" . date('Y-m-d H:i:s') . "] SUCCESS\n" . $debug_output . "\n---\n", FILE_APPEND);
    }

    echo json_encode([
        "success" => true, 
        "message" => "¡Mensaje enviado con éxito!",
        "debug" => $debug_mode ? $debug_output : null
    ]);
} catch (Exception $e) {
    if ($debug_mode) {
        file_put_contents(__DIR__ . '/log.txt', "[" . date('Y-m-d H:i:s') . "] ERROR: " . $e->getMessage() . "\n" . $debug_output . "\n---\n", FILE_APPEND);
    }
    
    http_response_code(500);
    echo json_encode([
        "success" => false, 
        "message" => "Error al enviar el correo.",
        "error" => $e->getMessage(),
        "debug" => $debug_mode ? $debug_output : null
    ]);
}
?>


