// use a backtip to make concatenication simplier thats what ES6 has introduced.

const name = 'Jack';
const hello = `Hello ${name}`;

function buildGreetingCard(person){
    return `
    <div class = 'card'>
        <h3 class='float-right'>
            <small class = 'text-uppercase'>Joined ${new Date(person.createdAt)}</small>
        </h3>
        <h2 class ='h3'>
            ${person.firstName} ${person.lastName}
            <small>${person.username}</small>
        </h2>
        <h4>${person.email}</h4>
    </div>
    `;
}