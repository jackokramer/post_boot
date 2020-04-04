//Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function imHungry(arr){
    //var sum = [];
    for(var x = 0; arr.length>x; x++){
        if(arr[x] === 'food'){ // needs a double or triple equals of food
            console.log('yummy');
        } else {
            console.log('Im hungry')
        }
    }
    return arr;
}

console.log(imHungry(['stuff', 'baking soda', 'food', 'zombies']));

// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function swapTowardCenter(arr){
    //var array = []; // no need for this
    for(var y = 0; arr.length/2>y; y+=2){ // trick here is to divide arr.length by 2 and increment by 2
        var temp = arr[0];
        arr[0] = arr[arr.length-1 -y];
        arr[arr.length-1- y] = temp;
    }
    //console.log(arr);// and return arr
    return arr;
}

//console.log(swapTowardCenter([2,3,5,62,2,6,7]));
//console.log(swapTowardCenter(['pizza',3,5,62,2,'chicken nuggets',7]));

//Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scaleArray(arr, num){
    for(var t = 0; arr.length>t; t++){
        arr[t] = arr[t] *num;
    }
    return arr;
}
console.group(scaleArray([1,2,4,5],9));
// Outlook Negative - Given an array create and return an new one containing all values provided by the array, made negative

function negativeMaker(arr){
    var newArr = [];
    for(var p = 0; arr.length>p; p++){
        if(arr[p]>0){
            arr[p]= arr[p]*-1;
        }
        newArr.push(arr[p])
    }
    return newArr;
}

//console.log(negativeMaker([1,2,-5,-4]));