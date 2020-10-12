class treeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
/** 
let one = new treeNode(`1`)
let two = new treeNode(`2`)
let three = new treeNode(`3`)
let four = new treeNode(`4`)
let five = new treeNode(`5`)
let six = new treeNode(`6`)

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = six;

console.log(one);


function inOrderPrint(root){
    if(root === null)return;

    inOrderPrint(root.left);
    inOrderPrint(root.right);
    console.log(root.value);
}

inOrderPrint(one);
*/

class BST{
    constructor(){
        this.root = null;
    }
    add(val, root = this.root){
        // if the tree is empty new node is the root
        if(this.root === null){
            this.root = new treeNode(val);
            return
        }
        if(val<root.val){
            if(root.left === null){
                root.left = new treeNode(val)
            } else{
                this.add(val, root.left)
            }
        } else{
            if(root.right === null){
                root.right = new treeNode(val)
            } else{
                this.add(val, root.right)
            }
        }
    }
    inOrderPrint(root){
        if(root === null)return;
        inOrderPrint(root.left);
        console.log(val);
        inOrderPrint(root.right);
    }
    search(val, root = this.root){
        if(root === null){ 
            return false;
        }
        if(val< root.val){
            return this.search(val, root.left);
        } else if(val > root.val){
            return this.search(val, root.right);
        } else {return true}
    }
    contains(value){
        let runner = this.root;
        while(runner){
            if(value == runner.value){
                return true;
            }
            if(value< runner.value){
                if(!runner.left){
                    return false;
                }
                runner = runner.left;
            } else{
                if(!runner.right){
                    return false;
                }
                runner = runner.right;
            }
        }
        return false;
    }
    min(){
        let runner = this.root;
        let min = this.root.value;
        while(runner.left){
            if(runner.left.value<min){
                min = runner.left;
            }
            runner = runner.left;
        }
        return min
    }
    max(){
        let runner = this.root;
        let max = this.root.value;
        while(runner.right){
            if(runner.right.value<max){
                max = runner.right;
            }
            runner = runner.right;
        }
        return max
    }
}

let tree = new BST();
tree.add(17);
tree.add(18);
tree.add(11);
tree.add(13);
tree.add(6);
tree.add(21);

console.log(tree.root);

console.log(tree.search(22));