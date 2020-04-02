function countNum(startnum){
    for(var x = startnum; x>=0; x--){ // needs to decrement or its a stack overflow/inifite loop
        console.log(x);
    }
}

countNum(9);
countNum(88);