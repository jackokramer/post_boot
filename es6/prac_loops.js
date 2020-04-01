// print out odds

function printodds(){
    //var sum = 0;
    for(var x = 0; x<20; x++){
        if(x%2 == 1){
            x++;
        }
    }
    return x;
}
console.log(printodds);