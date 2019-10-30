// Time to solve 14:23

function fibonacci(){ // create function

var numHolder = [0,1]; // create an array with the first 2 fibonacci squence.

for(var i = 0; i < 100; i++ ){ // for loop for 100 iterations
	numHolder.push(numHolder[i]+numHolder[i+1]); // add the first value and the value after to get the next value in the sequence and add it to the array.
  	console.log([i+1]+": "+numHolder[i]); // print to console the iteration and fibonacci sequence that has been added to the array.
  
	}
}

return fibonacci(); // return the function.