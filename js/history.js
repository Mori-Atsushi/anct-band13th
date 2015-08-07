$(function() {
	var num = 10;
	var now = 1;
	var position = 0;

	$('#go').on('click', function() {
		if(position > (num - 1) * -84) {
			$('#history').animate({'left': position - 84 + '%'}, 160, 'swing');
			position -= 84;
		}
		$('#back').css({'display' : 'block'});

		if(position == (num - 1) * -84) {
			$('#go').css({'display' : 'none'});		
		}
	});

	$('#back').on('click', function() {
		if(position < 0) {
			$('#history').animate({'left': position + 84 + '%'}, 160, 'swing');
			position += 84;
		}

		$('#go').css({'display' : 'block'});

		if(position == 0) {
			$('#back').css({'display' : 'none'});		
		}
	});

	$('#go2').on('click', function() {
		if(now < num) {
			now += 1;
			$('#big').css({'background-image' : 'url("../img/' + now + '.jpg")'})
		}
		
		$('#back2').css({'display' : 'block'});

		if(now == 10) {
			$('#go2').css({'display' : 'none'});		
		}
	});

	$('#back2').on('click', function() {
		if(now > 1) {
			now -= 1;
			$('#big').css({'background-image' : 'url("../img/' + now + '.jpg")'})
		}

		$('#go2').css({'display' : 'block'});

		if(now == 1) {
			$('#back2').css({'display' : 'none'});		
		}
	});

	$('#one').on('click', function() {
		now = 1;
		$('#big').css({'background-image' : 'url("../img/' + now + '.jpg")'})
		$('#back2').css({'display' : 'none'});
		$('#go2').css({'display' : 'block'});
	});

	$('#two').on('click', function() {
		now = 2;
		$('#big').css({'background-image' : 'url("../img/' + now + '.jpg")'})
		$('#back2').css({'display' : 'block'});
		$('#go2').css({'display' : 'block'});
	});

	$('#three').on('click', function() {
		now = 3;
		$('#big').css({'background-image' : 'url("../img/' + now + '.jpg")'})
		$('#back2').css({'display' : 'block'});
		$('#go2').css({'display' : 'block'});
	});

	$('#four').on('click', function() {
		now = 4;
		$('#big').css({'background-image' : 'url("../img/' + now + '.jpg")'})
		$('#back2').css({'display' : 'block'});
		$('#go2').css({'display' : 'block'});
	});

	$('#five').on('click', function() {
		now = 5;
		$('#big').css({'background-image' : 'url("../img/' + now + '.jpg")'})
		$('#back2').css({'display' : 'block'});
		$('#go2').css({'display' : 'block'});
	});

	$('#six').on('click', function() {
		now = 6;
		$('#big').css({'background-image' : 'url("../img/' + now + '.jpg")'})
		$('#back2').css({'display' : 'block'});
		$('#go2').css({'display' : 'block'});
	});

	$('#seven').on('click', function() {
		now = 7;
		$('#big').css({'background-image' : 'url("../img/' + now + '.jpg")'})
		$('#back2').css({'display' : 'block'});
		$('#go2').css({'display' : 'block'});
	});

	$('#eight').on('click', function() {
		now = 8;
		$('#big').css({'background-image' : 'url("../img/' + now + '.jpg")'})
		$('#back2').css({'display' : 'block'});
		$('#go2').css({'display' : 'block'});
	});

	$('#nine').on('click', function() {
		now = 9;
		$('#big').css({'background-image' : 'url("../img/' + now + '.jpg")'})
		$('#back2').css({'display' : 'block'});
		$('#go2').css({'display' : 'block'});
	});

	$('#ten').on('click', function() {
		now = 10;
		$('#big').css({'background-image' : 'url("../img/' + now + '.jpg")'})
		$('#back2').css({'display' : 'block'});
		$('#go2').css({'display' : 'none'});
	});
});