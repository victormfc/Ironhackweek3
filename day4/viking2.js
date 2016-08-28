var Viking = function(name) {
	this.name = name;
	this.health = 40;
	this.attack = function() {
		var punchstrength = Math.random();
		return Math.ceil(punchstrength * 10);//esto devuelve entre 1 y 10
	};
};

var myViking = new Viking("Urkul");
var myOtherviking = new Viking("Zunkar");

// console.log ("here are the two constestants: " + myViking.name + " " + myOtherviking.name);
// console.log ("Your viking: " + myViking.name + " gave a punch, his strengh is: " + myViking.attack());
// console.log ("Your viking: " + myOtherviking.name + " gave a punch, his strengh is: " + myOtherviking.attack());

var Pit = function(viking1,viking2) {
	this.viking1 = viking1;
	this.viking2 = viking2;
	this.battle = function() {
		while (this.viking1.health >= 11 && this.viking2.health >= 11) {
			this.viking1.health = this.viking1.health - this.viking2.attack();
			this.viking2.health = this.viking2.health - this.viking1.attack();
			console.log("next round");
			console.log("Viking 1: " + this.viking1.health);
			console.log("Viking 2: " + this.viking2.health);
		};
	};
};

var mypit = new Pit(myViking, myOtherviking);
mypit.battle();

var Saxon = function() {
	this.health = function() {
		var RandomSaxonHealth = Math.random(0,20)
		return Math.random() * (20 - 0) + 0;
	};
	this.attack = function() {
		var punchstrength = Math.random();
		return Math.ceil(punchstrength * 5);
	};
};
var mySaxon = new Saxon("Peril");
var myOtherSaxon = new Saxon("Nikil");

var Turn = function() {
	this.fightingturn = function() {
		var RandomTourn = Math.floor(Math.random() * (8 - 5) + 5);
			console.log("The tourn is : " + RandomTourn);
	};
};

var theturn = new Turn();
theturn.fightingturn();

//var Assault = function (fighter1,fighter2) {
//	this.fighter1 = 
//}
