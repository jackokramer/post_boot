//CountDown
/**
 *Create a function that accepts a number as an input. Return a new array that counts down by one, from
the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
 */

 function countDown(arr){
     let array = 0;
     for(let x = 0; arr.length>0; x--){
         if(arr[x]>0){
             arr[x] -1;
         }
     }
     return arr;
 }

 console.log(countDown(29));

 //Print and Return
/*Your function will receive an array with two numbers. Print the first value, and return the second.
*/

function printNReturn(num1, num2){
    let arra = [];
    console.log(num1);
    return num2;
}

console.log(printNReturn(1,6))
