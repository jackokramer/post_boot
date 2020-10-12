/*while(true){
    console.log('Projects and algos')
} // infinite loop


// recursive code is better since you don't need a for loop therefore less code
function boastPA(){
    console.log(`projects and algos`);
    boastPA();
}

boastPA()

function newYears(num){
    //basecase
    if(num === 0){
        console.log(`Happy New Year`)
        return;
    }
    // recusive case
    console.log(num);
    newYears(num)
}

newYears(5);


/*let i = 0
let num = 5
while(i<num){
    num -1;
}*/

// function factorial 5*4*3*2*1 = 

function factorial(num){
    //bass case
    if(num ===1) return 1
    // recursive casse
    return num * factorial(num-1);

}

console.log(factorial(5))

// factorial(n) = n*xfact(n-1)

// iterative factorial

function factorialIter(num){
    let fact = 1;
    for(let x = 0; x<=num; x++){
        fact*=x;
    }
    return fact
}


//Return Boolean. True/False

// binary targerts the middle point and  eliminates the other hald and zeos in on the correct half

let sortedArray = [1,3,5,8,12,14,16,19,23]


function rBinarySearch(arr, target){
    // base case
    if(arr.length === 0) return false
    let middleIndex = Math.floor(arr.length/2);
    let leftArr = arr.slice(0, middleIndex);
    let rightArr = arr.slice(middleIndex+1)// without plus one its an infinite loop

        // recursive case
    if(target< [middleIndex]){
        return rBinarySearch(leftArr, target);
    } else if(target> arr[middleIndex]){
        return rBinarySearch(rightArr, target)
    } else {
        return true;
    }
}

console.log(rBinarySearch(sortedArray, 5))

// recursive fibonacci

function recurseFibonacci(num){
    // base case
    if(num === 1 || num ===2) return 1;

    //recursive case
    return recurseFibonacci(num-1) + recurseFibonacci(num-2);
}

console.log(recurseFibonacci(10))