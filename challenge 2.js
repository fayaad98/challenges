// Time to solve 13:45

var string = prompt("Enter a string");
var array = [];
var reverse = [];

for (var i = 0; i <= string.length;i++){
 array.push(string.substring(i,(1+i)));
}

for (var j =  string.length; j > 0;j--){
 reverse.push(array[j-1]);
}

var reversedString = reverse.join("");
alert(reverseString);