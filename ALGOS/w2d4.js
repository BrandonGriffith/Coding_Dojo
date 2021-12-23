var arr2d = [ [2, 5, 8],
            [3, 6, 1],
            [5, 7, 7] ];

console.log(arr2d[0][2]);

console.log("end!!!!!!!!!!!!!!!!!!!!!!!!!!!")
function isPresent2d(arry, value) {
    for(i=0; i<arry.length; i++){
        for(x=0; x<arry[i].length; x++){
            if(arry[i][x] == value){
                console.log(i, x);
                console.log("true");
            }
        }
    }
}

isPresent2d(arr2d, 7);
console.log("end!!!!!!!!!!!!!!!!!!!!!!!!!!")

function flatten(arry) {
    var flat = [];
    for(i=0; i<arry.length; i++){
        for(x=0; x<arry[i].length; x++){
            flat.push(arry[i][x]);
        }
    }
    return flat;
}

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result);

