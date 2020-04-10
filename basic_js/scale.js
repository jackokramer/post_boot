// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scaleArray(arr, num){
    for(var x = 0; arr.length>x; x++){
        arr[x] = arr[x] * num;
    }
    return arr;
}

//console.log(scaleArray([1,2,5],6));

// factorial

function factorial(arr){
    for(var t = 0; arr.length > t; t--){
        arr[t] = arr[t] * arr[t];
    }
    return t;
}

console.log(factorial(5));