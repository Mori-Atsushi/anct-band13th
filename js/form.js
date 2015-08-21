$(function() {
	$('#contact_form').submit(function(){
		if(confirm('送信しますか？'))
			return true;
		else
			return false;
	});
});