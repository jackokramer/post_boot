//List: Add Front Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.
class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}


class SLlist{
    constructor(){
        this.head = null;
    }
    addFront(val){
        var newNode = new Node(val);
        if(this.head == null){
            this.head = newNode // positon at this.head holds  the newNode projct
            return this;// returning this will return the list
        }
        newNode.next = this.head;// the pointer for newNode goes to node located at this.head
        this.head = newNode;
        return this
    }

    length(){
        var count = 0;
        var runner = this.head; // variable runner is set to the same node that exists at this.head positon
        while(runner != null){
            count++;
            runner = runner.next;
        }
        return count;
    }
}
var myList = new SLlist();
console.log(myList);
myList.addFront(5);
myList.addFront(10);
myList.addFront(-3);
console.log(myList);
console.log(myList.length)
//List: Remove Front - Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node in a list, remove the head node and return the new list head node. If list is empty, return null.

//List: Front - Finally, Tad and Sam reach the front of the line to get movie tickets. Oh no – only one seat remains! Who was earlier in line: Tad or Sam? Return the value (not the node) at the head of the list. If list is empty, return null.