for(var num = 0; num<15; num++){
    console.log(num);
}
// output 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15

//console.log(num);

for (var x = 1; x<10; x++){
    if(x%3 == 0){
        console.log(x);
    }
}
//console.log(x);
//3,6,9,10

for(var j = 1; j<=15; j++){
    if(j%2 == 0){
        j+=2;
    }
    else if(j%3 == 0){
        j++;
    }
    console.log(j);
}
console.log(j);
// 1,4,5,8,10,11,14,16,17