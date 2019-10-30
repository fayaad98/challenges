// Time to solve 14:23

function fibonacci(){

var numHolder = [0,1];

for(var i = 0; i < 100; i++ ){
	numHolder.push(numHolder[i]+numHolder[i+1]);
  console.log([i+1]+": "+numHolder[i]);
  
	}
}

return fibonacci();