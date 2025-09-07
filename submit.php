<?php
// Tu clave secreta de reCAPTCHA
$secretKey = "6LdFMMErAAAAAOtat8QTS3HltaZNcw0CecuTHtxZ";

// Recoge el token enviado por el formulario
$recaptchaResponse = $_POST['g-recaptcha-response'];

// IP del usuario
$userIP = $_SERVER['REMOTE_ADDR'];

// Verifica el token con Google
$verifyURL = "https://www.google.com/recaptcha/api/siteverify";
$data = [
    'secret' => $secretKey,
    'response' => $recaptchaResponse,
    'remoteip' => $userIP
];

// Realiza la petición
$options = [
    'http' => [
        'method' => 'POST',
        'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
        'content' => http_build_query($data)
    ]
];
$context = stream_context_create($options);
$response = file_get_contents($verifyURL, false, $context);
$result = json_decode($response);

// Verifica el resultado
if ($result->success) {
    // ✅ El usuario pasó el reCAPTCHA
    echo "Formulario enviado correctamente.";
    // Aquí puedes guardar los datos, enviar email, etc.
} else {
    // ❌ Falló el reCAPTCHA
    echo "Por favor, verifica que no eres un robot.";
}
?>
