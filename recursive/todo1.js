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