const title = React.createElement('h1', null, 'Hello Dojo');
const message = React.createElement('h4', null, 'Things I need to do');
const items = ['Learn React', 'walk 10000 steps', 'play music'];
const list = React.createElement('ul', null, items.map((items, index)=>
    React.createElement('li', {key: index}, '${item}')
));

const app = React.createElement('div', null, title, message, list);

ReactDOM.render(app, document.getElementById('app'));