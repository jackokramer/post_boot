class listNode{
    constructor(value){
        this.value = value;
        this.next = null
    }
}
class singleList{
    constructor(){
        this.head = null;
    }
    addfront(value){
        let node = newNode(value);
        node.next=this.head;
        this.head = node;
        return this;
    }
    removeFront(){
        if (this.head != null){
            this.head = this.head.next
        }
        return this;
    }
    front(){
        if(this.head == null){
            return null
        }
        return this.head.value;
    }
}
