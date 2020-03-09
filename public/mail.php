<?php $name = $_POST['name'];
$formcontent="From: $name \n Message: $addr1 \n $addr2";
$recipient = "sachin.meier@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $name \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>
