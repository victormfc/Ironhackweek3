function decoder (words) {
	var index = 0;
	var secretMessage = "";

	for (var i=0; i<words.length; i++) {
		secretMessage += words [i][index];
		index = (index +1)%5;
	}
	return secretMessage;
}

var words = ["dead", "bygone", "landing", "cheaply", "assumed","incorrectly", "attention", "agent"];
console.log(decoder(words))

///////////////////////////////////////////////////
