<?php
// Recoger datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];
$captcha = $_POST['captcha'];

// Validar CAPTCHA
if (trim($captcha) != '7') {
    echo "Respuesta incorrecta a la pregunta de seguridad.";
    exit;
}

// Enviar el mensaje por correo
$destinatario = "tucorreo@ejemplo.com"; // Cambia esto por tu email real
$asunto = "Nuevo mensaje desde el formulario";
$cuerpo = "Nombre: $nombre\nEmail: $email\nMensaje:\n$mensaje";
$headers = "From: $email";

mail($destinatario, $asunto, $cuerpo, $headers);

echo "¡Mensaje enviado correctamente!";
?>
