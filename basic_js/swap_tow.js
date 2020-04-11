function swapTowardCenter(arr){
    var temp = [];
    for(var x = arr.length -1; x<arr.length; x--){
        arr[x] = arr[arr.length - x -1];
        arr[arr.length-x-1] = temp;
    }
    return arr;
}

//console.log(swapTowardCenter([1,'skaband', 11, true, 89]));

// outlook negative Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function outlookNeg(arr){
    var newArr = [];
    for(var t = 0; arr.length>t; t++){
        if(arr[t]>0){
            arr[t] = arr[t] * -1;
            newArr.push(arr[t]);
        } else {
            newArr.push(arr[t]);
        }
    }
    return newArr;
}
//console.log(outlookNeg([1,2,4,-5]));

//Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function alwaysHungry(arr){
    for(var y = 0; arr.length>y; y++){
        if(arr[y] = 'food'){
            console.log('yummy');
        } else {
            console.log('I`m hungry!');
        }
    }
    return arr;
}

//console.log(alwaysHungry(['monkey', 'tiger', 'food', 'duck']));

// scale the array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scaleArray(arr, num){
    var altarr = [];
    for(var o = 0; arr.length>o; o++){
        altarr = arr[o] * num;
        console.log(altarr);
    }
    return altarr;
}

console.log(scaleArray([1,2,6,7], 4));