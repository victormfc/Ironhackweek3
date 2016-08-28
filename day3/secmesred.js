	function decoder(words) {
  	return words.reduce(function(res, item, idx) {
    return res + item[idx % 5];
  	}, '');
}
var words = ["dead", "bygone", "landing", "cheaply", "assumed","incorrectly", "attention", "agent"];
console.log(decoder(words));

