//Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function previousLengths(arr){
    for(let x = arr.length-1; x>0; x--){
        arr[x] = arr[x-1].length;
        //arr[arr.length -1] = arr.length
        //arr[arr.length -1-x] = arr.length
    }
    return arr;
}

console.log(previousLengths(['hi', 'bye', 'stonehenge', 'circus']))

// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPositives(arr){
    let positives = 0;
    for(let z = 0; arr.length>z; z++){
        if(arr[z]>0){
            positives ++;
//            positives.push(arr.length-1);
        }
    }
    arr[arr.length -1] = positives
    return arr;
}

//console.log(countPositives([-9,-7,10,-11,2,3]))
//console.log(countPositives([9,-7,10,-11,2,3]))

//Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function incrementSec(arr){
    //let count = 0;
    for(let t = 0; t<arr.length; t+2){
        arr[t] = arr[t]+1;
        }
        for(let t  = 0; t< arr.length; t++){
            console.log(arr[y])
        }
    return arr;
}

//console.log(incrementSec([1,2,4,6]));