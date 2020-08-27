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
}