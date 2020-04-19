// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVision(arr){
    const newArray = [];
    for(let x = 0; arr.length>x; x++){
        newArray.push(arr[x]*2);
    }
    return newArray;
}

console.log(doubleVision([2,3,4]));

//Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function evensNodds(arr){
    let odds = 0; // here
    let evens = 0;
    for(let z = 0; z<arr.length; z++){
        if(arr[z]%2 === 1){
            odds++;
            evens=0;
        } else{
            evens++;
            odds=0;
        }
        if(odds == 3){
            console.log('that`s odd');
            odds = 0;
        } else if(evens ==3) {
            console.log('Even more so...');
            evens = 0;
        }
    }
}

//console.log(evensNodds([1,2,34,6,9,99,5])); // not right

//Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr){
    let newArray = [];
    for(let t = 0; arr.length>t; t++){
        newArray.push(arr[t]+7);
    }
    return newArray;
}

//console.log(addSeven([3,5,99,21,30]));
