//sll are effeicnietn because the place in storage is at the previous node

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let first_node = new Node("Duy");
let second_node = new Node("Jack");
let third_node = new Node("Jessica");

first_node.next = second_node;
second_node.next = third_node;


class SLL{
    constructor(value){
        this.head = new Node(value);
    }
    //add front adding something into the list needs a value. PLace in memeory is the pointer of the previous node
    addFront(value){
        let restOfList = this.head;
        this.head = new Node(value);
        this.head.next = restOfList;
        return this;
    }
    //front - to get data
    front(){
        if(this.head !== null){
            return this.head.value
        } else {
            return 'this is an empty list'
        }
    }
    // remove front no need for a parameter since we aren't adding anything
    removeFront(){
        this.head = this.head.next;
        return this;
    }

    //contains: given a value, return true if the value is in your list. else return false
    contains(value){
        if(val )

    }
    //display
    displayList(){
        let runner = this.head;
        let count = 1;
        while(runner){
            console.log(`Current node: ${runner}, current value: ${runner.value}, Count: ${count}`)
            runner = runner.next;
            count +=1;
        }
        return "*** TEST CONCLUDED ***";
        }
}

let firstSll = new SLL(2);
console.log(firstSll.addFront(3).addFront(6).addFront(8).addFront(17).displayList())
//console.log(firstSll.removeFront().displayList())

console.log(firstSll.front())