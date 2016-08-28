var Car = function(model, noise) {
	this.model = model;
	this.noise = noise;
    this.wheels = 4;
};

Car.prototype.makeNoise = function(){
    console.log(this.noise);
};


var myCar = new Car("Ferrari", "vavava");
myCar.makeNoise();
var myOtherCar = new Car("Mustang","psssssttsss")
myOtherCar.makeNoise();


/////////////////////////////////////

//diapos
var Animal = function() {
	this.name = "Buk";

	this.noise = "Brrrr";
	
	this.makeNoise = function() {
		console.log(this.noise + "!!!!!");
	}
};

var myAnimal = new Animal;
myAnimal.makeNoise();

//result:
//vavava
//Brrrr!!!!!
