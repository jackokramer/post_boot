// Given an array of multiple values (e.g. [0, -1, 2, -3, 4, -5, 6]), write a program that removes any negative values in that array.  Once your program is done, the array should be composed of only the non-negative numbers, in their original order.  Do this without creating a temporary array; only use the pop() method to remove values from the array.

function removeNeg(arr){
    var negs = 0;
    for(var x = 0; arr.length>x; x++){
        if(arr[x]<0){
            negs++;
        } else {
            arr[x - negs] = arr[x];
        }
    }
    while(negs --){
        arr.pop();
    }
    return arr;
}

console.log(removeNeg([1,4,-6,8,9,-11]));