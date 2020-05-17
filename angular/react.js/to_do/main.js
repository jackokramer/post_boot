function toDo(){
    const myButton = React.createElement('button', null, 'Click Me');
    console.log(JSON.stringify(myButton));
}

ReactDOM.render(myButton, document.getElementById('app'));