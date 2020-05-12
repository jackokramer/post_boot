// ES5 Version

function User(name){
    this.name = name;
}
//User.prototype.printName (){
    console.log(this.name);
//}

//es6 version

class User{
    constructor(name){
        this.name = name;
    }
    printName(){
        console.log(this.name);
    }
}

//Arrow  you don't have to write out the fucntion keyword everytime and allows us to sustain the value of 'this' and use it in the function.  Here are both side by side.

//ES5
[1,2,4].map(function(x){
    return n*2
}, this)
//ES6
[1,2,4].map(n => n*2)

//More complex example

//ES5 Example
let eventList = {
    _eventdate:'Monday',
    _events:['learn all day'],
    printEvents: function(){
        this.events.forEach(function(f){
            return console.log(this._events);
        }, this);
    }
};

//ES6 Example

let bob = {
    _eventdate:'Monday',
    _events: ['Code all day'],
    printEvents()
{
    this._events.forEach(e => console.log(e + 'this event for ' +this._eventdate))
    }
}

