const isAuthenticated = true;
//let cartItemCount = 0;

/*
if(isAuthenticated){
    //add item to cart
    cartItemCount = 1
} else {
    // tell user to log in
//    console.log('please log in')
    cartItemCount = 0;
}
*/

//DRY don't repeat yourself -- terinary operator
//const cartItemCount = isAuthenticated ? 1 : 0;//console.log("please login")// terinary is an expression and not a statement

//console.log(cartItemCount);

// helpful in some conditionals where you can eliminate repitition but shouldn't be used all the time

const age = 12;
//let greeting;

/*
if(age<10){
    greeting = 'Hi there';
} else if(age>18) {
    greeting = 'Hello there'
} else if(age>10){
    greeting = 'whats up?';
} else {
    greeting = "that's an interesting age"
}
*/
//console.log(greeting);

const greeting = age < 10 ? "hey there": age > 18 ? 'hello theer': age >10? 'whats up': "that's an interesting age" ;
// avoid chaining multiple statements for a terninary


console.log(greeting);