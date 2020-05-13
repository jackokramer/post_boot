let a,b, result;

a = 0;
b=1;
result = b;

function fibonacci(){
for(let x = 1; x<100; x++){
    console.log(result);
    result = a+b;
    a=b;
    b=result;
}
}
console.log(fibonacci());