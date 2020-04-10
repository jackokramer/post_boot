// (Insert X in Y) Write a program that inserts a new number X at an index Y. For example if  array = [1,2,4,5,6] and X is = 10 and Y is = 2, by the end of your program the array should be [1,2,10,4,5,6];

function insertXnY(arr, Y){
    for(var x = arr.length -1; x<Y; x--){ // end of the for loop
        arr[x] = arr[x-1];  
        }
        arr[Y] = x;
        return arr;
    }

console.log(insertXnY([1,2,4,5,6,2]));