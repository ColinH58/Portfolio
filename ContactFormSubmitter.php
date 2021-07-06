<?php
$name = $_POST['inputname'];
$company = $_POST['inputcompany'];
$email = $_POST['inputemail'];
$subject = $_POST["subject"];
$message = $_POST['message'];
$formcontent= "From: $name \n Company: $company \n Email: $email \n Subject: $subject \n Message: $message";
$recipient = "colinhoolwerf@gmail.com";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thanks for the message, I'll get back to you as soon as I can!";
?>