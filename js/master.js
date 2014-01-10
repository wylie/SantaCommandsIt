$(function() {

	$(document).on('click','.submit',function() {
		var val = $('.input').val();
		var val = val.replace(/[^a-zA-Z 0-9]+/g,'');
		var val = val.split(' ');
		
		var badWords = ['ass','jerk'];

		for(var x = 0; x < badWords.length; x++) {
			for(var i = 0; i < val.length; i++) {
					if(val[i] === badWords[x]) {
						var bad = true;
						console.log(badWords[x]);
						if (bad) {
							$('body').css('background-color', 'red');
							$('.result').text('You are naughty!').removeClass('naughty').addClass('naughty');
						}
					} else {
						$('.result').text('Yes, Santa Commands It!').removeClass('naughty').addClass('nice');
					}
				}
			}
		});

	// compare the two results  

});