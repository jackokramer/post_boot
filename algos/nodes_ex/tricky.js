/**
 * Find all starting points of all winning paths: 

A single-player game takes place on a colored board game, which has some definition of the possible transitions (i.e., from which nodes a player can move to which other nodes). A player's goal is to reach a node colored with a winning color, and can only step on nodes with their own color (and winning nodes).
Write a function that finds all nodes from which there exists a winning path (i.e., reaches a winning node and only uses nodes with the player's color prior to that node).

We can determine whether a transition between two given nodes is allowed. 
Followup: Now, with the same setting as before, we want to find all nodes from which there exists a path in which the player can advance without getting stuck (“not stuck” means reaching a winning color as before, or continuing infinitely). How would you do that?  
*/

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
    // move is disguised as add
    move(val, root = this.root){
        if (this.root == null){
            this.root = new Node(val);
            return;
        }
        if(value<root.val){
            if(root.left == null){
                root.left = new Node(val)
            }
        }
    }
    //function defined here setting it up as evens and odds
    search(value){
        let runner = this.root;
        while(runner){
            if(runner.value == value){
                return true
            }
            // now move left and right
            if(value>runner.value){
                runnner = runner.right;
            } else {
                runner = runner.left;
            }
            }
        }
    lastColor(value, runner, end =18){
        if(runner%2===1){
            runner.next = left;
        }
        else {
            if (runner%2 === 0){
                runner.next = right;
            }
            ///return end
        }
    }
    }

color_board = new binarySearch(21);

// goal would be to have it traverse through a tree or a board in this case and get to 21 from another number.

console.log(color_board.search(192))
