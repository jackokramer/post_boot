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
    addFront(value){
        let restOfList = this.head;
        this.head = new Node(value);
        this.head.next = restOfList;
        return this;
    }

    displayList(){
        let runner = this.head;
        let count = 1;
        while(runner){
            console.log(`Current node: ${runner}, current value: ${runner.value}, COunt: ${count}`)
            runner = runner.next;
            count +=1;
        }
        return this
    }
}

let firstSll = new SLL(2);
console.log(firstSll.addFront(3).addFront(6).addFront(8).addFront(2).displayList())