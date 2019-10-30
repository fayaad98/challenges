// Time to solve 13:45

var string = prompt("Enter a string"); //capture input from user
var array = []; // create an empty array
var reverse = []; // create another empty array

for (var i = 0; i <= string.length;i++){ //loop for the length of the string
 array.push(string.substring(i,(1+i))); //loop through each letter of the string using subring and add into the first empty array
}

for (var j =  string.length; j > 0;j--){ 
 reverse.push(array[j-1]); //start at the top of the array and then add each element to the reverse array
}

var reversedString = reverse.join(""); // join every element in the reverse array to create a string
alert(reverseString); // print out the reversed string. 