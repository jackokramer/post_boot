class BSTNode{
    constructor(val){
        this.value = val;
        this.right =  null;
        this.left = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    addNode(val, position = this.root){
        if(this.root == null){
            this.root = new BSTNode(val);
            return;
        }
        else if(val <position.value){
            if(position.left == null){
                position.left = new BSTNode(val);
                return;
            }
            else{
                return this.addNode(val, position.left)
            }
        }
    }
}