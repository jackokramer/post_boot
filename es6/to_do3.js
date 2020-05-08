//Increment the Seconds - Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.

function incrementInSec(arr){
    for(let x = 0; arr.length>x; x+=2){
        arr[x] = arr[x]+1;
    }
    for(let x = 0; arr.length>x; x++){
        console.log(arr[x])
    }
    return arr;
}

console.log(incrementInSec([1,2,4,6,7,9]));

//Previous Lengths You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.

function previousLength(arr){
    for(let y = arr.length -1; y>0; y--){
        arr[y] = arr[y-1].length;
    }
    return arr;
}

console.log(previousLength(['stash', 'poor_boy', 'saywer', 'messi']))

//Double Vision - Given an array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.

function doubleVision(arr){
    let newArr = [];
    for(let i = 0; arr.length>i; i++){
        arr[i] = arr[i]*2;
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(doubleVision([3,2,1,8]));

// Count Positives -Given an array of numbers, create a function to replace last value with the number of positive values. Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPositives(arr){
    let count = 0;
    for(let p = 0; arr.length>p; p++){
        if(arr[p]>0){
            count++
        }
        arr[arr.length-1]= count
    }
    return arr;
}

console.log(countPositives([-8,9,-77,2,-38, 17]))

// Scale the Array - Given array arr and number num, multiply each arr value by num, and return the changed arr.

function scalArray(arr, num){
    for(let c = 0; arr.length>c; c++){
        arr[c] = arr[c]*num
    }
    return arr
}

console.log(scalArray([4,3,4,76,2,16], 4))