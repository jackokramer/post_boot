//Predict 1
function greeting(){
    return 'Jello';
    console.log('World');
}
let worf = greeting();
console.log(worf);//Jello

//Predict 2

function add(num1, num2){
    console.log("Summing Numbers");
    console.log('num1 is: ' + num1);
    console.log('num2 is: ' + num2);
    let sum = num1 + num2;
    return sum;
}

let result1 = add(7,11);
let result2 = add(89,30);
console.log(result1);
console.log(result2);

//Predict 3 

function highFive(num){
    for(var z = 0; num>z; z++){
        if(z ==5){
            console.log('Jigh Five');
        }
        else{
            console.log(z);
        }
    }
}

highFive(8);