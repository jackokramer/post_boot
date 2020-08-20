class Node:
    def __init__(self, valueInput):
        self.value = valueInput
        self.next = None

class Stack: 
    def __init__(self):
        self.top = None

    def push(self, valueInput):
        newnode = Node(valueInput)
        if self.top == None:
            self.top == newnode
        else:
            newnode.next = self.top
            self.top = newnode
        return self

    ## another implmentation of push

    def push2(self, valueInput):
        newNode = Node(valueInput)
        temp = self.top
        self.top = newNode
        self.top = newNode
        self.top.next = temp
        return self

    def display(self):
        runner = self.top
        print(runner)
        while runner != None:
            print(runner.value)
            runner = runner.next
        return self

    def returntop(self):
        if self.top == None:
            print('nothing to return. no top')
            return self
        else:
            print(self.top.value)
            return self.top.value

    def isEmpty(self):
        if self.head == None:
            return True
        else:
            return False

    def pop(self):
        if self.top !=None:
            tempVal = self.top.value
            self.top = self.top.next
            return tempVal, self
        else:
            print('no top to pop')
            return self

class Queue:
    def __init__(self):
        self.head = None
        self.tail = None

    def enqueue(self, valueInput):
        newNode = Node(valueInput)
        if self.head == None:
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.next = newNode
            self.tail = self.tail.next
        return self

    def isEmpty(self):
        if self.head == None:
            return True
        else:
            return False
    def dequeue(self):
        if self.head == None:
            print('nothing to remove')
            return self
        else:
            temp = self.head.value
            self.head = self.head.next
            return temp

    def display(self):
        runner = self.top
        #print(runner)
        while runner != None:
            print(runner.value)
            runner = runner.next
        return self

    def isEmpty(self):
        if self.head == None:
            return True
        else:
            return False

    def front(self):
        if self.head == None:
            return None
        else:
            return self.head.value

    def contains(self, valueInput):
        runner = self.head
        #while runner is pointing to the node
        while runner != None:
            print(runner)
            print(valueInput)
            if runner.value == valueInput:
                return True
            runner = runner.next
        return False

## Last bit    
    def size(self):
        total = 0
        runner = self.head
        while runner != None:
            total +=1
            runner = runner.next
        #prinr(total)
        return total

q1 = Queue()
q2 = Queue()

q1.enqueue('l').enqueue('o').enqueue('l')



def isPalindrome(queueInput):
    ## determine whether the vlaues in the queIniput is a palindrome
    newStack = Stack()
    length = queueInput.size()
    for x in range(length):
        temp = queueInput.dequeue()
        queueInput.enqueue(temp)
        newStack.push(temp)
    queueInput.display()
    newStack.display()
    #print(queueInput.dequeue())
    queueRunner = queueInput.head
    stackRunner = newStack.top
    while queRunner != None:
        if queueRunner.value != stackRunner.value:
            return False
        queueRunner = queueRunner.next
        stackRunner = stackRunner.next
    return True
    #return true/false

isPalindrome(q1)