<?php
/**
 * Pineda Hydraulic - Contact Bridge API
 * Handles contact form submissions for Static Export deployments.
 */

// 1. Configuración de Seguridad y CORS
header("Access-Control-Allow-Origin: *"); // Ajustar a tu dominio real si es necesario
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// 2. Definir API Key de Autorización (Debe coincidir con la del frontend)
// En un entorno real, podrías usar una variable de entorno de servidor si HostGator lo permite,
// o simplemente una constante aquí para este puente específico.
define('API_AUTH_KEY', 'ph_auth_2026_secure_bridge'); 

// 3. Verificar Autorización
$headers = apache_request_headers();
$authHeader = isset($headers['Authorization']) ? $headers['Authorization'] : '';

if ($authHeader !== 'Bearer ' . API_AUTH_KEY) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "No autorizado."]);
    exit;
}

// 4. Obtener y Validar Datos
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

// 5. Configuración del Correo
$to = "merolhack@gmail.com"; // Receptor especificado por el usuario
$email_subject = "[Contacto Web] $subject";

// Construir cuerpo del mensaje
$email_content = "Has recibido un nuevo mensaje desde el sitio web.\n\n";
$email_content .= "Nombre: $name\n";
$email_content .= "Empresa: $company\n";
$email_content .= "Email: $email\n";
$email_content .= "Teléfono: $phone\n";
$email_content .= "Asunto: $subject\n\n";
$email_content .= "Mensaje:\n$message\n";

// Headers
$email_headers = "From: Pineda Hydraulic Web <no-reply@servicio-pineda.com>\r\n";
$email_headers .= "Reply-To: $email\r\n";
$email_headers .= "X-Mailer: PHP/" . phpversion();

// 6. Enviar Correo
if (mail($to, $email_subject, $email_content, $email_headers)) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "¡Mensaje enviado con éxito!"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Error interno al enviar el correo."]);
}
?>
