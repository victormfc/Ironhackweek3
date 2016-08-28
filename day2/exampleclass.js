var myArray= [2, -5, 10, 5, 4,-10, 0];

function findPairs(array) {
	var results = [];
	for (var i=0; i<array.length; i++) {
		for (var j=i; j<array.length; j++) {
			if (array[i] + array[j]===0) {
				results.push(i + "," + j);
			}
		}
	}
	return results;
}
console.log(findPairs(myArray));

//[ '1,3', '2,5', '3,1', '5,2', '6,6' ]
//[ '1,3', '2,5', '6,6' ]
//https://www.mindstick.com/blog/390/using-javascript-nested-loops