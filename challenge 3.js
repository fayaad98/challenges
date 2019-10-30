// Time to solve 4:50

var num = prompt("Enter a number to multiply");
var multiplicationAmount = prompt("How many multiples would you like ?",12);

for(var i = 0; i <= multiplicationAmount; i++){
	console.log(num+" X "+i+" = "+ num*i);
}