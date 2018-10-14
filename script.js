 function sayHello () {
	console.log("Hello");
}


 sayHello();

var sayBye = function() {
	console.log("Bye");
}
sayBye();


/*
function sing() {
	console.log("AHHHHHHHHHHHHHHHHHH");
	console.log("TEHHHHHHHHHHHHH");
}

sing();





function sing2() {
	console.log("EHHHHHHHHHHHHH");
	console.log("YIEEEEEEEEEEEEE");
}

sing2();




function sing(song) {
	console.log(song);
}

sing("AHHHHHHHHHHHHHHH");
sing("EHHHHHHHHHHHHHHH");
sing("OHHHHHHHHHHHHHHH");
sing("UHHHHHHHHHHHHHHH");






function multiply(a,b) {
	if (a > 10 || b > 10) {
		return "that's too hard";
	} else {
		return a * b;
	}
	
}

multiply(5, 10);




function multiply(a,b) {
		return a * b;
	}

alert(multiply(3,4));



function multiply(a,b) {
		return a * b;
	}

var total = multiply (4,4);
alert(total);


parameters = are what a and b is, multiply has a and b or function of arguments.
arguments =  inside "(parenthesis)" <---

*/

/*
var list = ["tiger", "cat", "bear", "bird"];
console.log(list[1]);

 in concolse
var numbers = [1,2,3,4]

var booleans = [true, false, true]

var functionList = [function apple() {
	console.log("apple");
}]
 */


/*
 var user = {
 	name: "Jeffrey",
 	surname: "Omadto",
 	age: 21,
 	hobby: "basketball",
 	isMarried: false,
 	spells: ["flying", "breathing in water"],
 	shout: function() {
 		console.log("EHHHHHHH");
 	}
 };

 var list = [
 	{
 		username: "Jeffrey",
 		password: "margarino"
 	},
 	{
 		username: "Popoy",
 		password: "margarines"
 	}


 ];
 */



// basic facebook 


/*
var database = [
	{
		username: "jeffrey",
		password: "margarino"
	}
];

var newsFeed = [
	{
		username: "bobby",
		timeline: "Feeling tired"
	},
	{
		username: "sally",
		timeline: "javascript is awesome"
	}
];


var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
	if (user === database[0].username && 
		pass === database[0].password) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password!");
	}
}

signIn(userNamePrompt, passwordPrompt);

*/


// JAVASCRIPT TERMINOLOGY 


/*
//function declaration
function newfunction() {

}; - create functions


//functions expression
var newfunction = function namefunction or anormous function() {

}; 

var newfunction = function namefunction() {

};

or  

var newfunction = function() {

};

//expression

1+3;
var a =2;
return true;
producing value

// calling or invoking a function
alert();
newfunction(parameter1, parameter2);

//assign a variable
var a = true;


//function vs method
function thisIsAFunction() {

}

var obj = {
	thisIsAMethod: function() {

	}
}

thisIsAFunction()
obj.thisIsAMethod() 

*/













































