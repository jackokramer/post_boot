class Node{
    constructor(value){
        this.value= value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }
    addFront(value){
        let newNode = new Node(value);
            if(this.head == null){
                this.head = newNode
                return this
            }
            newNode.next = this.head
            this.head = newNode
        }
        contains(value){
            let runner = this.head;
            while(runner.next!= null){
                if(runner.value == value){
                    return true;
                }
                runner = runner.next
            }
            return false;
        }
        removeFront(){
            if(this.head ==null){
                return `empty list`
            } else {
                this.head = this.head.next
            }
        }
    }