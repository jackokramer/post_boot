const title = React.createElement('h1', null, 'Hello Jack');
const message = React.createElement('h3', null, 'heres the to dos')
const items = ['Learn React', 'Play music', 'go to bed early'];
const list = React.createElement('ul', null, items.map((item, index)=>
    React.createElement('li', {key: index}, `${item}`)
));

const app = React.createElement('div', null, title, message, list);

ReactDOM.render(app, document.getElementById('app'))