/*var beatles = ['John', 'Paul', 'Ringo', 'George'];
function printNames(names){
    function actuallyPrintNames(){
        for(var index = 0; index<names.length; index++){
            var name = names[index];

            console.log(name + ' was found at index ' + index);
            }
            console.log('name and index after loop is ' + name + " : " + index);
        }
        actuallyPrintNames();
    }
printNames(beatles);
*/

// Destructoring

// destructoring assignment syntax is a javascript expression that makes it possible to unpack values from arrays, or properties from objects into disticnt variables.


const person ={
    firstName: 'Ziggy',
    lastName: 'Marley',
    email: 'ziggymarley@gmail.com',
    password: 'azkMeAnyTh1n5',
    username: 'ziggyDark',
    adresses: [
        {
            address: '132 Pelton',
            city: 'Santa Monica',
            zipcode: '210921',
        },
        {
            address: '821 Bakerloo Drive',
            city: 'London',
            zipcode: 'Wc2 5DU'
        }
    ],
    createdAt: 123289843,
};

const animals = ['horse', 'catdog', 'monkey', 'zebra'];

//destructoring example 
const {email, password} = person;
const [firstAnimal, secondAnimal, thirdAnimal] = animals;
// const {address: [kidCudi, rossBarkley]} = person

console.log(email);

console.log(password);

console.log(firstAnimal);

console.log(secondAnimal);

