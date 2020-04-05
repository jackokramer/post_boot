//Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function incrementInSec(arr){
    var sum = [];
    for(var x = 0; arr.length>x; x++){
        if(arr[x]%2 === 0){
            sum+= arr[x];
            console.log(x);
        }
    }
    return arr;
}

//console.log(incrementInSec([6]));

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function previousLengths(arr){
    //var strings = [];
    for(var t = arr.length -1; 0< t; t--){ // variable is different
        arr[t] = arr[t-1].length; // just shows empty arrays in each index rather than replacing it with a number
            //arr[t] = arr.length-t-1;
        }
        return arr;
    }

//console.log(previousLengths(['stuff', 'dojo', 'awesome', 4]));

//Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr){
    var seven = [];
    for(var z = 0; arr.length>z; z++){
        seven.push(arr[z] + 7);//if(arr[z]){
            
        }
        return seven;
    }

//console.log(addSeven([1,2,4,5]));

// Reverse Array - Given an array, write a function that reverses values, in-place. Example ([2,1,4,7,8,5]) would reverse to be ([5,8,7,4,1,2]). Do this without creating a empty temp array. (Hint: you'll need  to swap values).

function reverseArr(arr){
    for(var t = 0; arr.length/2>t; t++){ // divde arr,length (the length of the argument by 2)
        var temp = arr[t]; // temp has to be the indez of the array
        arr[t] = arr[arr.length-1-t]; // subtract 1 first
        arr[arr.length-1-t] = temp;
    }
    return arr;
}

console.log(reverseArr[2,1,4,7,8,5]);
