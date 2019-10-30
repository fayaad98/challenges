// Time to solve 43:26
// This script only works for the lowest double number in the array and only works with 2 numbers.

var nums = [0,1,2,3,5,2];
var k = prompt("Enter a number for k to test",3);

var sortArray = nums.slice().sort();
var distinct;


for(var i = 0; i < nums.length ; i++){

  if(sortArray[i]==sortArray[i+1]){
  	var distinct = sortArray[i];
    
  }
}
  
var a = nums.indexOf(distinct);
var b = nums.indexOf(distinct,(distinct+1));

if((b-a) == k){
	alert("True \n\nThere are two " +distinct+"'s in the array nums, and the absolute diffrence between their position is exactly " + (b-a));
}else if((b-a) > k){
	alert("False \n\nThe absolute difference between the positions of the two " + distinct+"'s is "+(b-a)+ " which is more than "+k);
}else if((b-a) < k){
	alert("False \n\nThe absolute difference between the positions of the two " + distinct+"'s is "+(b-a)+ " which is less than "+k);
}