//Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

fucntion alwaysHambre(arr){
    for(var x = 0; arr.length>x; x++){
        if(arr[x] = 'food'){
            console.log('Delicious!!!')
        } else {
            console.log('Im hungry')
        }
    }
    return arr;
}

console.log(alwaysHambre(['stuff', 'food', 1, 7, 11]))

//Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
//Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].