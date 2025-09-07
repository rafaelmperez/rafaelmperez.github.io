<?php
$nombre = $_POST['nombre'];
$captcha = $_POST['g-recaptcha-response'];

if (!$captcha) {
  echo "Por favor, verifica que no eres un robot.";
  exit;
}

$secretKey = "6LcQNMErAAAAAGxtSPC-Xr0oGa64SdH6ZA5PVAf6";
$ip = $_SERVER['REMOTE_ADDR'];

$verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$captcha&remoteip=$ip");
$response = json_decode($verify);

if ($response->success) {
  echo "Formulario enviado correctamente. Hola, " . htmlspecialchars($nombre);
  // Aquí puedes guardar los datos, enviar email, etc.
} else {
  echo "Verificación fallida. Intenta de nuevo.";
}
?>
