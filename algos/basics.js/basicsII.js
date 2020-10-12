// print low return high
function printLowReturnHigh(arr){
    let low = arr[0]
    let high = arr.length -1;
    console.log(low)
    return high;
}

// print one return another
function printOneReturnAnother(arr){
    let second = arr.length-2
    console.log(second);
    for(let x = 0; arr.length>x ; x++){
        if(arr[x]%2 === 1){
            return arr;
        }
    }
}

// Double Vision

function doubleVision(arr){
    for(let x = 0; arr.length>x; x++){
    let double = arr[x]*arr[x];
    return double
    }
}

//count positives

function countPositives(arr){
    let last = arr.length -1;
    for(let x = 0; arr.length>x ; x++){
        if(arr[x] > 0){
            let count = arr[x];
            count = last
        }
        return arr;
    }
}