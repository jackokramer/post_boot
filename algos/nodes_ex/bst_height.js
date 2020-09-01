const { magenta } = require("color-name");

class Node{
    constructor(value, left, right){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class binarySearch{
    constructor(){
        this.root = null;
    }
    size(node = this.root){
        if(node === null){
            return 0;
        }
        let left = this.size(node.left)
        let right = this.size(node.right)
        return (left + right) + 1
    }
    height(node = this.root){
        if(node ===null){
            return zero
        } else{
            let l = this.height(node.left)
            let r = this.height(node.right)
            return Math.max(l,r)+1; 
        }
    }
}