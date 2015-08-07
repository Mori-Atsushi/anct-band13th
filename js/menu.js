$(function() {
	$('#menu').on('click', function() {
		$('#nav').animate({'left': '0%'}, 200, 'swing');
		$('#mask').fadeIn(200);
	});

	$('#mask').on('click', function() {
		$('#nav').animate({'left': '-100%'}, 200, 'swing');
		$('#mask').fadeOut(200);
	});
});