/* threee requirements for effective recursion.

1) Setting up a base case

2) Forward Progess

3) Calling it back to the original problem


*/


// recursive sigma

function recursiveSigma(num){
    if(num>0){
        return recursiveSigma(num-1) + num;
    }
    return 0
}

console.log(recursiveSigma(7))
// should be 28

// recursive factorial Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function recursFact(num){
    if(num>0){
        return recursFact(num-1)*num
    } return 1
}
console.log(recursFact(6))

// recursive fill

/* Write rFib(num). Recursively compute and return numth Fibonacci value. As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: 
rFib(2) = 1 (0+1); 

rFib(3) = 2 (1+1); 

rFib(4) = 3 (1+2); 

rFib(5) = 5 (2+3).rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.
*/

function recursFibo(numth){
    if(numth < 2 ){
        return numth
     } else{ 
         return recursFibo(numth-1)+(numth-2)
    }
}

console.log(recursFibo(17))

//Recursive “Tribonacci” Write function rTrib(num) to mimic Fibonacci, adding previous three values instead of two. First three Tribonacci numbers are 0, 0, 1, so rTrib(3) = 1 (0+0+1); rTrib(4) = 2 (0+1+1); rTrib(5) = 4 (1+1+2); rTrib(6) = 7 (1+2+4). Handle negatives and non-integers appropriately and inexpensively.

function recursTribonac(num){
    if(num < 3){
        return num
    } else {
        return recursTribonac(num-1) + (num-2) +(num-3);
    }
}

console.log(recursTribonac(8))

//Paging Dr. Ackermann The Ackermann function is among the earliest examples of a computable but not primitive-recursive function. It grows rapidly and hence can overflow the JavaScript stack frame even at very low values. This function accepts two non-negative integer values, num1 and num2, and follows these rules:
//ackermann(0,num2) == num2+1;
//ackermann(num1,0) == ackermann(num1-1,1) if num1 > 0 (otherwise see #1);
//ackermann(num1,num2) == ackermann(num1-1,ackermann(num1,num2-1)).
//Don’t be dismayed if a num1 value as low as 4 “blows your stack”. That’s the nature of this function!   
/*
function ackermanRecurs(num1, num2){
    if( num1 == 0){
        return num1 + 1;
    } else if( num2== 0) {
        return ackermanRecurs(num1-1, 1);
    } else (
        ackermanRecurs(num3,num4) {
        return ackermanRecurs(num3 -1 , ackermanRecurs(num3, num4 -1)))
        }
    return ackermanRecurs
}

*/ 
/*Recursive Binary Search
Given a sorted array and a value, recursively determine whether value is found within array. 

rBinarySearch([1,3,5,6],4) = false; 

rBinarySearch([4,5,6,8,12],5) = true.
*/
function rBinarySearch(nums, value){
    let mid = Math.floor(nums.length/2);
    if(nums[mid] == value){
        return true;
    }
    else if(value < nums[mid] && nums.length > 1) {
        return rBinarySearch(arr.slice(0, mid), value);
    }
    else if(value>nums[mid] && nums.length>1){
        return rBinarySearch(nums.slice(mid, arr.length), value)
    } else {
        return false
    }
    /*
    if(nums === number){
        return true;
    } else if(nums != number) {
        if(nums > number){
             nums  - rBinarySearch/2
        } else if(nums<number){
            nums + rBinarySearch/2
        }
    } */
}

console.log(rBinarySearch([1,3,4,5,9,11],7))

/*
Greatest Common Factor
Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

gcf(a,b) == a, if a == b;
gcf(a,b) == gcf(a-b,b), if a>b;
gcf(a,b) == gcf(a,b-a), if b>a.
Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).
*/

function rGCG(num1, num2){
    if(num1 == num2){
        return num1;
    }
    if(num1 >num2){
        return rGCG(num1-num2, num2)
    }
    if(num1<num2){
        return rGCG(num1, num2-num1);
    }
}

console.log(rGCG(3,9))
///
/*Tarai
The Tarai (Japanese: “to pass around”) function was created to profile recursive performance in various systems and languages. Unlike other functions, numbers don't get particularly large, but the amount of recursion is significant. The tarai function accepts three parameters and is defined as:

tarai(x,y,z) == y, if x <= y (otherwise see rule #2);
tarai(x,y,z) == tarai(tarai(x-1,y,z),tarai(y-1,z,x),tarai(z-1,x,y)).
Calling tarai(10,2,9) should return 9 (after recursing 4145 times!).
*/