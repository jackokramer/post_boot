function iterativeFib(arr){
    let fibs = [0,1];
    for(let x = 0; x< arr; x++){
        fibs.push(fibs[0]+ fibs[1]);
        fibs.shift();
    }
    return fibs[0];
}

console.log(iterativeFib([20]));