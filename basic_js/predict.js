let arr = [8,7,3,7,8,2,0,9];
for(var x  = 0; arr.length >x; x++){
    console.log(x);
}

//console.log(arr);

// 0,1,2,3,4,5,6,7

let art = [7,3,1,3,6,8,0];
for(var t = 0; t<art.length; t++){
    if(art[t]%2 === 0){
        console.log(art[t])
    }
    else{
        console.log('thats odd')
    }
}

//console.log(art);

let arty = [1,2,7,8,9,10,2,6,9];
var newArty = [];
for(var w = 0; w<arty.length; w++){
    if(arty[w]< 0){
        newArty.push(arty[w]);
        arty[w]= arty[w] *1;
    }
    else if(arty[w] == 0){
        arty[w] = 'zero'
    }
    else{
        arty[w] = arty[w] *1;
    }
}
console.log(arty);
console.log(newArty);