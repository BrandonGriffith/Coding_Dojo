//problem 1
var fruit1 = "apples";
var fruit2 = "oranges"; 
fruit2 = fruit1;  
console.log(fruit2 + " and " + fruit1);
//problem 2
var fruit1 = "apples";
var fruit2 = "oranges";
var temp = fruit1;
fruit1 = fruit2;
fruit2 = temp;
console.log(fruit2 + " and " + fruit1);
//problem 3
var start = 0;
var end = 12;
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}
//problem 4
function reverse(x){
    var array2 = [];
    for(var i = x.length-1; i>=0; i--){
        array2.push(x[i]);
    }
    console.log(array2);
}
var y = [1,2,3,4,5,6,7,8,9,10];
var y2 = [4,8,15,16,23,42];
reverse(y);
reverse(y2);
//problem 4-2
function reverse2(x){
    var array2 = [];
    var z = 0;
    for(var i = x.length-1; i>=0; i--){
        array2[z] = x[i];
        z++
    }
    console.log(array2);
}
reverse2(y);
reverse2(y2);
//problem 4-3
function reverse3(x){
    var start = 0;
    var end = x.length-1;
    while(start<end){
        var temp = x[start];
        x[start] = x[end];
        x[end] = temp;
        start++
        end--
    }
    console.log(x);
}
reverse3(y);
reverse3(y2);
