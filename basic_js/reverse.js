//Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArr(arr){
    for(let x = arr.length; arr.length>x/2; x++){
        let temp = arr[x];
        arr[x] = arr[arr-x-1];
        arr[arr-x-1] = temp;
    }
    return arr;
}

//console.log(reverseArr([4,3,2,7,9,11]));

// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function outlookNeg(arr){
    let newArr = [];
    for(let t = 0; arr.length>t; t++){
        if(arr[t]<0){
            newArr = arr[t] * -1;
        }
        return newArr;
    }
}

console.log(outlookNeg([2,4,5,2, -9, -7, 4]));