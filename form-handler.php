<?php
// Clave secreta de hCaptcha (la que NO se comparte)
$secret = '9ebc0d3a-beda-41dc-9b40-3bfead501350';

// Recoger datos del formulario
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';
$token = $_POST['h-captcha-response'] ?? '';

// Validar hCaptcha
$verify = file_get_contents("https://hcaptcha.com/siteverify?secret=$secret&response=$token");
$response = json_decode($verify);

if ($response->success) {
    // Aquí puedes enviar el correo, guardar en base de datos, etc.
    $to = "tu@email.com";
    $subject = "Nuevo mensaje de contacto";
    $body = "Nombre: $name\nEmail: $email\nMensaje:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
} else {
    echo "Verificación de hCaptcha fallida. Intenta de nuevo.";
}
?>
