//Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function imHungry(arr){
    var sum = [];
    for(var x = 0; arr.length>x; x++){
        if(arr[x] = 'food'){
            console.log('yummy')
        } else {
            console.log('Im hungry')
        }
    }
    return arr;
}

console.log(imHungry(['stuff', 'baking soda', 'food', 'zombies']))