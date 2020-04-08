//Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function addOdds(arr){
    for(var x = 1; arr.length>x; x+=2){
            arr[x] = arr[x] + 1;
        } // two for loops
        for(var x = 0; arr.length>x; x++){
            console.log(arr[x]);
        }
        return arr;
    }


console.log(addOdds([1,2,4,5,6,8]));

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function previousLengths(arr){
    for(var t = arr.length -1; 0<t; t--){
        arr[t] = arr[t-1].length;
    }
    return arr;
}

console.log(previousLengths(['mass', 'stufew', 'swoll']));