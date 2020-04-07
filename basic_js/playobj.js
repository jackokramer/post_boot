let users = [
    {
        name: 'Jack',
        age: 29
    },
    {
        name: 'Andy',
        age: 28
    },
    {
        name: 'Nina',
        age: 23
    }

];

console.log([users[0].name,' - ', users[0].age]);

console.log([users[1].name,' - ', users[1].age]);

console.log([users[2].name, ' - ', users[2].age]);

//print the name and the age of each user using a for loop:

for(var x = 0; x < users.length; x++){
    console.log(users[x].name, '-', users[x].age);
}