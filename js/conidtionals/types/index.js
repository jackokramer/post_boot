/*
Primitive types:

string
number
boolean
undefined
null
symbol

everything else - Object type
*/

let message = 'some string';

console.log(typeof message);

console.log(typeof window);

console.log(typeof true);

//1) Explicit type conversion - wanting to change data types
//2) Implicit type conversion - (corecion)

console.log('1' * '2'); //coercises our types to make them work together
console.log('10' -20);

//MEMORIZE THIS - how conditionals work in javasctipt

//truthy
//falsy

/*
if(Boolean(value) === true){
    // if true, do something with that value
} else {

}
*/

if(0){
    // if true, do something with that value
    console.log('run')
} else {
    console.log('skipped')
}

/* ALL Falsy values
false
0 
''
null 
undefined
NaN
*/

// 1) Avoid direct comparisons in condtionals
const username = '';

if(!username){
    console.log('no user')
}

//2) Use triple === (strict equals operator)

const user = null;


if(null ==undefined){
    console.log('equals');
} else {
    console.log('not equals')
}

//3) Convert to real Boolean values where needed

if(Boolean(Nan) === Boolean(Nan)){
    console.log('equal')
} else {
    console.log('not equals')
}