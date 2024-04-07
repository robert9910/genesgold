<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "robertoaguilarbadilla91@gmail.com"; // Cambia esto por tu dirección de correo electrónico
    $subject = "Nuevo mensaje de contacto";
    $body = "Nombre: $name\nEmail: $email\nMensaje:\n$message";
    
    // Usa la función mail() para enviar el correo electrónico
    if (mail($to, $subject, $body)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
} else {
    echo "Error: Acceso no permitido.";
}
?>