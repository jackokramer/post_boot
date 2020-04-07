//Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function outlookNeg(arr){
    var newArr = [];
    for(var x ; arr.length>x; x++){
        if(arr[x]>0){
            newArr = arr[x] *1; 
        }
        newArr.push(arr[i]);
    }
    return newArr;
}

// // Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry" once. Example: [1,"food",true, "food"] ==> "yummy" "yummy". [1,2,4,"sleep"] ==> "I'm hungry"

function alwaysHungry(arr){
    var gotFood = false;
    for(var b = 0; arr.length>b; b++){
        if(arr[b] == 'food'){
             console.log('yummy');
             gotFood = true;
        } 
    }
        if(gotFood == false){
        console.log('Im hungry');
        }
}

console.log(alwaysHungry(['fix', 'food', 7,12]));


// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function biggieSize(arr){
    for(var p = 0; arr.length>p; p++){
        if(arr[p]>0){
            arr[p] = 'biggie';
        }
    }
    return arr;
}

//console.log(biggieSize([1,2,-5,-7,-4]));

//Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(arr){
    var low = arr[0];
    var high = arr[0];
    for(var c = 1; arr.length>c; c++){
        if(arr[c]<low){
            low = arr[c];
        } else if(arr[c]>high){
            high = arr[c];
        }
    }
    console.log(low);
    return high;
}

//Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function printOneReturnAnother(arr){ // don't need a for loop
    console.log(arr[arr.length-2]);
    for(var t = 0; arr.length>t; t++){
        if(arr[t]%2 == 1){
            return arr[t];
        }
    }
}

console.log(printOneReturnAnother([1,3,-6,24,30,17]));

// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVision(arr){
    let newt = [];
    for(var z = 0; arr.length>z; z++){
            newt.push(arr[z] * 2);
    }
    return newt;
}

//console.log(doubleVision([1,2,6,7,88]));