//Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleArray(arr){
    let newArr = [];
    for(let x = 0; arr.length>x; x++){
        newArr.push(arr[x] * 2);
    }
    return newArr;
}

console.log(doubleArray([1,2,6,7,90,3]))//  undefined

// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArr(arr){
    for(let z = 0; arr.length/2>z; z++){
        let temp = arr[z];
        arr[z] = arr[arr.length-1-z];
        arr[arr.length-1-z] = temp;
    }
    return arr
}


//console.log(reverseArr([3,4,6,79,10,2]));

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function evensNOdds(arr){
    let evens = 0;
    let odds = 0;
    for(let y = 0; arr.length >y; y++){
        if(arr[y]%2 == 1){
            odds++
            evens = 0
        } else {
            evens++;
            odds = 0;
        }
        if(odds == 3){
            console.log('thats odd');
            odds = 0
        } else if(evens ==3){
            console.log('even more so.');
            evens = 0
        }
    }
}

//evensNOdds([1,2,3,5,7,9,2,4,6,0]);