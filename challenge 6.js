//time taken 1h:30 
// incomplete - this code does not work.

array1 = [3, 2, 1];
array2 = array1.splice().sort();
count =0;

for(var i = 0; i<array1.length;i++){
if(array1[i] != array2[i]){

	var tmp = array1[i];
    array1[i] = array1[i + 1];
    array1[i + 1] = tmp;
	count++
}
}

alert(count);