<?php
$name = $_POST['inputname'];
$company = $_POST['inputcompany'];
$email = $_POST['inputemail'];
$message = $_POST['message'];
$formcontent=" From: $name \n Company: $company \n Email: $email \n Message: $message";
$recipient = "colinhoolwerf@gmail.com";
$subject = "subject";
mail($recipient, $subject, $formcontent) or die("Error!");
echo "Thanks for the message, I'll get back to you as soon as I can!";
?>