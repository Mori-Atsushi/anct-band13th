<?php
	$name = htmlspecialchars($_POST['name'], ENT_QUOTES);
	$mail = htmlspecialchars($_POST['mail'], ENT_QUOTES);
	$phone = htmlspecialchars($_POST['phone'], ENT_QUOTES);
	$message = htmlspecialchars($_POST['message'], ENT_QUOTES);

	mb_language('ja');
	mb_internal_encoding('UTF-8');

	$head = '自動送信';
	$email = 'contact@anct-band.sakura.ne.jp';
	$header = 'From: ' . mb_encode_mimeheader($head) . '<' . $email . '>';
	$main = '名前： ' . $name . '

メール： ' . $mail . '

電話番号： ' . $phone . '

お問い合せ内容： ' . $message;
	$title = '第13回定期演奏会 お問い合わせ';

	$result = mb_send_mail("contact@anct-band.sakura.ne.jp", $title, $main, $header);

	if ($result) {
		header("Location: ../");
	} else {
		header("Location: ../contact/");
	}
?>