const response = "Reed"; // invalid ''
const emailVerified = true;
/*
let username;

if (response) {
   if(emailVerified){ 
  username = response;
  }
} else {
  username = "guest";
}
*/

//&& and operator


//|| //or operator

const result = true && false;
console.log(result);


const username = emailVerified &&response || "guest"; // example of short circuting chnage order of conditions . BE AWARE OF OPERATOR PRECENDENCE && has a higher precidence than || meaning it'll be exicuted first.
//USE PARENTHESIS () TO PLACE || IN FRONT OF && (AND)

console.log(username);