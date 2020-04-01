// print out odds

function printodds(){
    var sum = 0;
    for(var x = 1; x<20; x++){
        if(x%2 == 1){
            sum = x++;
        }
    }
    return x;
}
console.log(printodds());

//Sum and Print 1-5
// 1. Sum numbers from 1 to 5, printing out the current number so far at each step of the way.
// 2. The expected output will be: Num:1, Sum:1, Num:2, Sum:3, Num:3, Sum:6, Num:4, Sum:10, Num:5, Sum:15

function sumNum(){
    var sum = 0;
    for(var t = 1; t<=5; t++){
        sum +=t;
    }
    return sum;
}

console.log(sumNum());