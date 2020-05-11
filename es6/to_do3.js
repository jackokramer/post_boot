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

// Outlook: Negative Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function negArr(arr){
    let newArray = []
    for(let q = 0; arr.length>q; q++){
        if(arr[q]>0){
            arr[q]= arr[q]*-1;
        }
        newArray.push(arr[q])
    }
    return newArray;
}
console.log(negArr([1,4,-55,7,-3, -99]))

//Evens and Odds - Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

function evensNOdds(arr){
    let evens = 0
    let odds = 0
    for(let z = 0; arr.length>z; z++){
        if(arr[z]%2=== 1){
            odds++
            evens = 0
        } else{
            evens++
            odds = 0
        }
        if(odds === 3){
            console.log('that`s odd')
            odds = 0
        }
        if(evens === 3){
            console.log('even more so')
            evens = 0
        }
    }
    return arr;
}

console.log(evensNOdds([1,2,4,6,9,9,11,4,2,22]))

//Always Hungry -Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.

function alwaysHungry(arr){
    let gotFood = false
    for(let d = 0; arr.length>d; d++){
        if(arr[d]==='food'){
            console.log('delicious')
            gotFood = true;
        }
     } 
     if(gotfood == false){
            console.log('Im hungry')
        }
        return arr;
}
//console.log(alwaysHungry(['soft', 11, 'food', 'iniesta', 'procsuitto']))

//Add Seven to Most - Build a function that accepts an array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

function addSeven(arr){
    let newSev = []
    for(let e = 0; arr.length>e; e++){
        arr[e] = arr[e]+7
        newSev.push(arr[e])
    }
    return newSev
}

console.log(addSeven([2,4,5,33,88]))

//Reverse Array -Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].

function reverseArr(arr){
    for(let f =0; arr.length>f/2; f++){
        let teamp = arr[f];
        arr[f] = arr[arr.length - 1 -f];
        arr[arr.length - 1 -f] = teamp
    }
    return arr;
}

console.log(reverseArr([2,4, 'food', 'messi', 'mbappe', 5, 9]))