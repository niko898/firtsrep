<?php
if($_POST['submit']) {
$result = mail("wildniko88@gmail.com","Анкета с сайта","С сайта была получена заявка: \nИмя ".$_POST[name]." \nE-mail ".$_POST[email]);

if ($result){
echo "<p>Спасибо!<p>";	
}else
{
echo "<p>Сообщение не отправлено<p>";		
}
}
?>