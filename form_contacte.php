<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './phpmailer/src/Exception.php';
require './phpmailer/src/PHPMailer.php';
require './phpmailer/src/SMTP.php';

//var_dump($_POST);
if (isset($_POST['verificacioHumana']) && $_POST['verificacioHumana'] == 'ok') {
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $missatge = $_POST['missatge'];

    $smtpHost = 'smtp.gmail.com';
    $smtpUsername = 'sanzrequenaroberto@gmail.com';
    $smtpPassword = 'qifm ayph davg wyec';
    $smtpPort = 587;
    
    $mail = new PHPMailer(true);
    
    try {
        $mail->isSMTP();
        $mail->Host = $smtpHost;
        $mail->SMTPAuth = true;
        $mail->Username = $smtpUsername;
        $mail->Password = $smtpPassword;
        $mail->SMTPSecure = 'tls'; // TLS Encryption
        $mail->Port = $smtpPort;
    
        $mail->setFrom($smtpUsername, "Contacte web");
        $mail->addAddress('robertosanzrequena@gmail.com');
    
        $mail->isHTML(true);
        $mail->Subject = 'Contacte web';
        $mail->Body = "<b>NOM: </b>" . $nom . "<br><b>E-MAIL: </b>" . $email . "<br><b>MISSATGE:</b><br>" . $missatge;
    
        $mail->send();
        echo "ok";
    } catch (Exception $e) {
        echo "error_mail";
    }
} else {
    echo "error_checkbox";
}
