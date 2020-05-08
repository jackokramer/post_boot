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
