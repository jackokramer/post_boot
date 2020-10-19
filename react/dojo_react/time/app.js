/*const myButton = React.createElement('button', null, 'Click Me');
console.log(JSON.stringify(myButton));

ReactDOM.render(myButton, document.getElementById('app'))

        document.getElementById('time-btn').onclick=()=>{
            document.getElementById('time').innerHTML = new Date().toString();
        }*/

function update(){
    const element = React.createElement('h2', null, `this time is: ${new Date().toLocaleTimeString()}`);
    ReactDOM.render(element, document.getElementById('app'));
}

setInterval(func =>{
    1000, 
    update()
})