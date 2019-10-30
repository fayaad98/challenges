// Time to solve 4:50

var num = prompt("Enter a number to multiply"); // request user to input a number they would like to recieve the multiplication times table for
var multiplicationAmount = prompt("How many multiples would you like ?",12); // request user to input the length of the multiplication timestable, defualt set to 12.

for(var i = 0; i <= multiplicationAmount; i++){ // for loop for the length entered starting from 0, default 12.
	console.log(num+" X "+i+" = "+ num*i); // print to console log the multiplication times table in full: EG: 5 X 5 = 25.
}