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

//Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArr(arr){
    for(var t = 0; arr.length/2>t ; t++){
        var temp = arr[t];
        arr[t] = arr[arr.length - 1 -t];
        arr[arr.length -1 -t] = temp;
    }
    return arr;
}

console.log(reverseArr(['stuff', 1, 7, 79, 'argue']))

//Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scaleArr(arr, num){
    for(let w = 0; arr.length>w; w++){
        arr[w] = arr[w]*num;
    }
    return arr;
}

console.log(scaleArr([1,3,4,7],5))

//Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function incrmentsSec(arr){
    for(let t = 0; arr.length>t; t+=2){ // add two
        arr[t]= arr[t]+1;
        }
        for(var t = 0; t <arr.length; t++){
            console.log(arr[t]);
        }
    return arr;
}

console.log(incrmentsSec[(1,3,5,4,6)]);

//Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVision(arr){
    let newArra = [];
    for(let q = 0; q< arr.length; q++){
        let double = arr[q]*2; // create a variable called double
        newArra.push(double);// add the push function from double to the new array
    }
    return newArra;
}

console.log(doubleVision([1,2,35,77]));