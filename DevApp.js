
function chewThem (var userChoice) {

	var compChoice = Math.floor(Math.random() * 5));

	var choices = ['scissors','paper','rock','lizard','spock'];

	var winChoice = {
		      0: [1,3],
		      1: [2,4],
		      2: [3,0],
		      4: [0,2]
	}

	if( userChoice != compChoice) {
		if(winChoice.indexOf(compChoice) == -1)
			return -1;
		else return 1;
	} else return 0;
}                                            
