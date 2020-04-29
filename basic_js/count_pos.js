//Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPost(arr){
    let count = 0;
    for(let x =0 ; arr.length>x; x++){
        if(arr[x]>0){
            count++;
        }
    }
    arr[arr.length-1] = count;
    return arr;
}

console.log(countPost([-7,11,2,-9,-39]));

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function previousLengths(arr){
    for(let y = arr.length-1; y>0 ; y--){
        arr[y] = arr[y-1].length;
        }
        return arr;
}

console.log(previousLengths(['monster', 'inc', 'messi', 'toni']));

//Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr){
    let newArr = [];
    for(let m = 0; arr.length>m; m++){
        newArr.push(arr[m] + 7);
    }
    return newArr;
}

console.log(addSeven([4,5,2,11,-4,5,]));