console.log("Algos testing site 1");
//problem 1
var a = 25;
a = a - 5;
console.log(a+10);
a = "hello";
console.log(a + " hello2");
//problem 2
for(var i=0; i<10; i++){
    console.log(i);
    i = i + 3;
    //i++
}
console.log(i + " is the final value of i");
//problem 3
function getTotal(arrayOfNumbers) {    
    var sum = arrayOfNumbers[0];
    for(var i=0; i<arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum); 
    }
    console.log("the total is: " + sum);
}
getTotal([1, 3, 5]);
