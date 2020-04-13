function darthfibonacci(arr){
    if(arr === 1){
        return [0,1]; 
    }
    else { var x =  darthfibonacci(arr-1);
    x.push(x[x.length -1] + x[x.length -2]);
    return x;
    }
}

console.log(darthfibonacci([50]));

