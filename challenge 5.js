// Time to solve 43:26
// This script only works for the lowest double number in the array and only works with 2 numbers.

var nums = [0,1,2,3,5,2]; // given array of integers
var k = prompt("Enter a number for k to test",3); // request K from the user , defualt is 3

var sortArray = nums.slice().sort(); // sort the array in a new instance
var distinct; // create empty variable for use later


for(var i = 0; i < nums.length ; i++){ // loop for the length of the array

  if(sortArray[i]==sortArray[i+1]){ // check if there are 2 of the same values in the sorted array one after the other.
  	var distinct = sortArray[i]; // store that array element value in a variable.
    
  }
}
  
var a = nums.indexOf(distinct); // check the index of the array element and store it in variable a
var b = nums.indexOf(distinct,(distinct+1)); // check the index of the other array element by specifying to search for the index after the first ones position

if((b-a) == k){ // if the difference between the 2 indicies are equal to k then return true statement
	alert("True \n\nThere are two " +distinct+"'s in the array nums, and the absolute diffrence between their position is exactly " + (b-a));
}else if((b-a) > k){ // if the diffrence between the 2 indicies are greater than k then return false more than statement
	alert("False \n\nThe absolute difference between the positions of the two " + distinct+"'s is "+(b-a)+ " which is more than "+k);
}else if((b-a) < k){ //if the diffrence between the 2 indicies are greater than k then return false less than statement
	alert("False \n\nThe absolute difference between the positions of the two " + distinct+"'s is "+(b-a)+ " which is less than "+k);
}