// Challenge 1: Check if the user is allowed to add an "iPad" to its shopping cart. Write a ternary that sets the shoppingCart variable to "iPad" if the user is authenticated, and an empty string if the user isn't authenticated

const isAuthenticated = true;
let shoppingCart = 'ipad';
let user = isAuthenticated;

if( user === isAuthenticated){
    console.log('added to cart')
    shoppingCart++;
} else {
    console.log('no dice')
}

// write your code here

let shoppingCart = isAuthenticated ? 'Ipad': "";

console.log("shoppingCart: ", shoppingCart);


// Challenge 2: Check if user is old enough. Write a ternary that sets allowedAccess to true if the age is 18 or more, or false if not
const age = 28;
let allowedAccess;

// write your code here
let user = 21

if(user > age){
    console.log('come on in')
} else{
    console.log('access denied')
}

 allowedAccess = age>18? 'come on in': "access denied";
//
console.log("allowedAccess: ", allowedAccess);
