<?php
// Cargar la clave secreta desde una variable de entorno o archivo privado
$secretKey = getenv('RECAPTCHA_SECRET'); // No la guardes en el código

// Validar entradas
$nombre = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$mensaje = isset($_POST['message']) ? trim($_POST['message']) : '';
$captcha = $_POST['g-recaptcha-response'] ?? '';

if (!$captcha) {
  echo "Por favor, verifica que no eres un robot.";
  exit;
}

// Verificar con Google reCAPTCHA
$ip = $_SERVER['REMOTE_ADDR'];
$verifyURL = "https://www.google.com/recaptcha/api/siteverify";
$data = [
  'secret' => $secretKey,
  'response' => $captcha,
  'remoteip' => $ip
];

$options = [
  'http' => [
    'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
    'method'  => 'POST',
    'content' => http_build_query($data)
  ]
];
$context  = stream_context_create($options);
$verify   = file_get_contents($verifyURL, false, $context);
$response = json_decode($verify);

if ($response && $response->success) {
  echo "¡Formulario enviado correctamente! Gracias, " . htmlspecialchars($nombre);
  // Aquí puedes guardar los datos o enviar un correo
} else {
  echo "Verificación fallida. Intenta de nuevo.";
}
?>
