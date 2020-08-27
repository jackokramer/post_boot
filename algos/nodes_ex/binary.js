class Node{
    constructor(value, left, right){
        this.value = value;
        this.left= null;
        this.right = null
    }
}

class binarySearch{
    constructor(){
        this.root = null;
    }
    add(val, root = this.root){
        // if tree is empty new node is the root
        if(this.root == null){
            this.root = new Node(val);
            return;
        }
        if(value<root.val){
            if(root.left === null){
                root.left = new Node(val);
            } else{
                this.add(val, root.left)
            }
        } else {
            if(root.right === null){
                root.right = new Node(val);
            } else{
                this.add(val, root.right);
            }
        }
    }
    inOrderPrint(root = this.root){
        if(root === null)return;
        inOrderPrint(root.left);
        inOrderPrint(root.left);
        console.log(root.val);
    }
    search(val, root=this.root){
        if(root === null)
        return false;
        if(val<root.val){
            return this.search(val, root.left);
        } else if(val>root.val){
            return this.search(val, root.right)
        } else{
            return true;
        }
    }
}