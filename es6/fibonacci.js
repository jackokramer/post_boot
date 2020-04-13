function darthfibonacci(arr){
    var result = 0;
    for(var x = 1; arr.length>x; x++){
        result = arr[x] + arr[x]+1;
    }
    return arr;
}

console.log(darthfibonacci([50]));