$(document).ready(function () {

	var userWins = 0;
	var compWins = 0;
	var currentMatch = 0;

	function chewThem (userChoice) {
		var compChoice = Math.floor(Math.random() * 5);
		console.log('AI', compChoice);
		var result = [];
		var winChoice = {
	    0: [1,3],
	    1: [2,4],
	    2: [3,0],
			3: [4,1],
	    4: [0,2]
		};

		if( userChoice !== compChoice) {
			if(winChoice[userChoice].indexOf(compChoice) === -1)
				result.push(1);
			else result.push(0);
		} else result.push(2);
		result.push(compChoice);

		return result;
	}

	$('.user-choice').on('click', function () {

		$('li').removeClass('active');
		$(this).parent().addClass('active');

		var choices = ['scissors','paper','rock','lizard','spock'];
		var choice = $(this).data('choice');
		var player = ['User', 'Computer'];
		var matchResult = chewThem(choice);
		console.log('aci', matchResult)
		var result = function() {
 			var text = ['You Won!', 'You Lost!', 'It\'s a tie'];
			return text[matchResult[0]];
		}();

		$('#result').text(result);

		var matchSet = choices[choice] + ' vs ' + choices[matchResult[1]] + ': Winner: ' + ((matchResult[0] !== 2) ? player[matchResult[0]] : 'Tie');
		$('.small').text(matchSet);

		$('#history').prepend('<p>' + matchSet + '</p>');
		if (matchResult[0] === 0) {
			userWins++;
			currentMatch++;
		} else if (matchResult[0] === 1){
			compWins++;
			currentMatch++;
		}

		if (userWins === 2) {
			$('#result').text('USER HAS WON THE GAME SET');
			userWins = 0;
			compWins = 0;
			currentMatch = 0;
		} else if (compWins === 2) {
			$('#result').text('COMPUTER HAS WON THE GAME SET');
			compWins = 0;
			userWins = 0;
			currentMatch = 0;
		}

		// $('#status').html('<p>' + currentMatch + ' / 3');


	});
});
