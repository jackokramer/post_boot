// Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].

function resetNegatives(arr){
    for(let x = 0; arr.length>x; x++){
        if(arr[x]<0){
            arr[x]=0
        }
    }
            return arr;
}

console.log(resetNegatives([1,2,-3,4,5,-7]))

//Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].

function moveForward(arr){
    for(let x = 0; arr.length-1>x; x++){
        arr[x]=arr[x+1];
    }
    arr[arr.length -1] = 0;
    return arr;
}
let result = moveForward([21,2,3,2,5,63,23])
console.log(result);

// Given an array, return an array with values in a reversed order.  For example, returnReversed([1,2,3]) should return [3,2,1].

function reverseArray(arr){
    for(let x = 0; arr.length/2>x; x++){
        let temp = arr[x];
        arr[x] = arr[arr.length-x-1]
        arr[arr.length-x-1] = temp;
    }
    return arr;
}
let results = reverseArray([1,4,5,6,22])
console.log(results)

//Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function doubleVision(arr){
    for(let z = arr.length-1; z>=0; z--){
        arr[2*z+1] = arr[z]
        arr[2*z] = arr[z]
        }
        console.log(arr);
    }
