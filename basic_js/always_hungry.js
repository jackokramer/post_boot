//Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

fucntion alwaysHungry(arr){
    let gotFood = false; // added this bit
    for(let x = 0; arr.length>x; x++){
        if(arr[x] === 'food'){
            console.log('Delicious!!!')
            gotFood == True;
        }
        if(gotFood == false){
            console.log('i`m hungry');
        }
        //} else {
        //    gotFood === false;
        //    console.log('Im hungry');
        //    break
        }
        return arr;
    }

console.log(alwaysHungry(['stuff', 'food', 1, 7, 11]))

//Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.


function swapTowardCenter(arr){
    for(let z = 0; arr.length/2>z; z+2){ // divide by two and add two close
        let temp = arr[z];
        arr[z] = arr[arr.length-1-z];
        arr[arr.length-1-z] = temp; // swithced arr.length -1-z
    }
    return arr;
}

console.log(swapTowardCenter(['stash', 2, true, 'negative', 'Mbappe']));

//Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

//function scaleArray(arr, num){
//    let newArray = [];
//    for(let v = 0; arr.length>v; v++){
//        if(arr[v]){
//           newArray = arr[v]*num;
//        }
//    }
//    return newArray;
//}

function scaleArray(arr, num){
    for(let z = 0; arr.length; z++){
        arr[z] = arr[z] * num;
    }
    return arr;
}

console.log(scaleArray([1,2,32,1,5]));