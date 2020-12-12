class BTNode{
    constructor(value){
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root=null;
    }
    //Add
    add(value){
        if(this.root){
            let runner = this.root;
                while(runner){
                    if(value>runner.value){
                        if(runner.right){
                            runner = runner.right;
                        } else {
                            runner.right = new BTNode(value);
                            return this
                        }
                    } else{
                        if(runner.left){
                            runner = runner.left;
                        } else {
                            if(runner.left){
                                runner = runner.left;
                            } else{
                                runner.left = new Node(value);
                                return this
                            }
                        }
                    }
                }
                this.root = new Node(value);
                return this
        }
        // contains
        let runner = this.root;
        while(runner){
            while(runner){
                if(value == runner.value){
                    return true;
                }
                if(value < runner.value){
                    if(!runner.left){
                        return false
                    }
                    runner = runner.left;
                } else {
                    if(!runner.right){
                        return false;
                    }
                    runner = runner.right;
                }
            }
            return false;
        }
    }
}