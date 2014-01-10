$(function() {

	function result(bad) {
		if ( bad === true ) {
			$('.result').removeClass('naughty').addClass('naughty').text('You are naughty!');
		}
		if ( bad === false ) {
			$('.result').removeClass('naughty').addClass('nice').text('Yes, Santa Commands It!');
		}
		console.log(bad);
	}

	$(document).on('click','.submit',function() {
		var val = $('.input').val();
		var val = val.replace(/[^a-zA-Z 0-9]+/g,'');
		var val = val.split(' ');
		
		var badWords = ['ass','jerk'];

		for(var x = 0; x < badWords.length; x++) {
			for(var i = 0; i < val.length; i++) {
				if(val[i] === badWords[x]) {
					var bad = true;
					result(bad);
				}
				if(val[i] !== badWords[x]) {
					var bad = false;
					result(bad);
				}
			}
		}
	});

	// compare the two results  

});