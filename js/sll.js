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
            let runner = this.head;
            while(runner){
                if(runner.value === value){
                    return true
                }
                runner = runner.next;
            }
            return false
    }
    //length: return # of nodes in the list
    length(){
        return this.displayList()
    }
    //max
    max(){
        let max = this.head.value;
        let runner = this.head;
        while(runner){
            if(max<runner.value){
                max = runner.value;
            }
            runner = runner.next;
        }
        return max;
    }
    // min
    min(){
        let min = this.head.value;
        let runner = this.head;
        while(runner){
            if(min>runner.value){
                min = runner.value;
            }
            runner = runner.next;
        }
        return min;
    }
    //average
    average(){
        let sum = 0;
        let runner = this.head;// any time you'd traverse through a linked lis create a runner
        while(runner){
            sum += runner.value
            runner=runner.next
        }
        return sum/this.length()
    }
    //display
    displayList(){
        let runner = this.head;
        let count = 1;
        while(runner){
            //console.log(`Current node: ${runner}, current value: ${runner.value}, Count: ${count}`)
            runner = runner.next;
            count +=1;
        }
        return count //"*** TEST CONCLUDED ***";
        }
    //utlimate analysis return a dictionary containing max, min, avg, and length
    ultimareAnalysis(){
        return{
            'max': this.max(),
            'min': this.min(),
            'average': this.average(),
            'length': this.length()
        }
    }
}

let firstSll = new SLL(2);
console.log(firstSll.addFront(3).addFront(6).addFront(8).addFront(17).displayList())
//console.log(firstSll.removeFront().displayList())

console.log(firstSll.front())
console.log(firstSll.contains(7))
console.log(firstSll.ultimareAnalysis())