//Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArr(arr){
    for(let x = arr.length; arr.length>x/2; x++){
        let temp = arr[x];
        arr[x] = arr[arr-x-1];
        arr[arr-x-1] = temp;
    }
    return arr;
}

console.log(reverseArr([4,3,2,7,9,11]));