//var numbers = "80:70:90:100";

//function averageColon(numbers) {
//	var arrayNumbers = numbers.split(":")
//	var sum = 0;
//	for( var i = 0; i < numbers.length; i++ ){
 //   sum += parseInt( numbers[i]);

//}
//averageColon("80:70:90:100")

///////////////////////////////////////

var numbers = "80:70:90:100"

function averageColon(numbers) {
	return numbers.split(":").reduce(function (res, item, idx, array) {
		return res + parseInt(item) / array.length;
	}, 0);//es el primer valor q le pasamos a reduce
}
console.log(averageColon(numbers));

///////////////////////////
//var numbers = "80:70:90:100";
//c = numbers.split(":");
//["80", "70", "90", "100"]

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce

//The parseInt() function parses(analiza) a string argument 
//and returns an integer of the specified 
//radix (the base in mathematical numeral systems).

