// Time to solve 6:56 

for (var i = 1; i <= 100; i++) { // for loop until 100 starting from 1
	if(i%3==0 && i%5==0){ // if 3 & 5 can go into variable i without any remainders then print fizzbuzz
  	console.log("fizzbuzz");
  }else if(i%3==0){ //else if 3 can go into variable i without any remainders then print fizz
  	console.log("fizz");
  }else if(i%5==0){
  	console.log("buzz"); // else if 3 can go into variable i without any remainders then print fizz
  }else{
  console.log(i); //else print the variable i
  }
  
}