function countNum(startnum){ // function expects a parameter in order to run
    for(var x = startnum; x>=0; x--){ // needs to decrement or its a stack overflow/inifite loop
        console.log(x);
    }
}

countNum(9);
countNum(88);