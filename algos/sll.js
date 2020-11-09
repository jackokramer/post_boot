/**
 * OOP Refreshere
 *  Prototypes
 * ES6 syntax
 * Single Linked Lists
 */

// Implement a linked list Node Class

// Implement the list class

// Add Node/ Add node to the end

//Display List

//Add Front

// Remove Front

// Insert At

/*
class BankAccount:
    def __init__(self, int_rate=0, balance=0);
        self.int = int_rate
        self.balance = balance

        def deposit(self,amount):
            self.balance +=amount
            return self

ba1 = BankAcount(balance=100)
ba1 = BankAcount(balance=100)
self serve as the single instance
*/

class bankAccount{
    constructor(intRate = 0, balance=0){
        this.intRate = intRate
        this.balance = balance
    }
    deposit(amount){
        this.balance += amount
        console.log(`${amount} has been added to the account.`)
        //return this;
    }
}

let bankAccount1  = new bankAccount(0.08, 200);
console.log(bankAccount1.balance);
bankAccount1.deposit(5000)
console.log(bankAccount1.balance)


class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

/*let n2 = new Node(4);
console.log(n2);
let n3 = new Node(19);
n2.next = n3;
console.log(n2); */

// implement a list class

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    add(value){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
        } else {
            let currnet  = this.head;
            while(currnet.next){
                current = current.next;
            }
            current.next =newNode;
            console.log(`added ${value}`)
        }
        this.size++;
    }
}
