//primative data types store single simple values : byte, int, float, boolean, double, char
// structure is similar to an array but used in c
// arrays can't store different data types but structures can
/* structures can store other structures in them think of setting up knights on both end s of a chess board
the main issue with structures is that you cannot define functions within one
**you can't set up move functions
*/

/**Objects are instances of a class
 * classes are templates of an object
 */

 class Knight{ //initialize its attributes and variables methods and functions for information 
    constructor(this, postion, color){
        function movePiece(){
            // set this function to move properly
        }
        color;
    }
    postion
}

// knight class represents any given knight
// knight object represents only the singular knight

/**
 * OOP helps programmers create complex programs by grouping together relatd sata and functions
 */

/**
  * Encapsulation 
  * Abstraction
  * Inheritance
  * Polymorphism
  */

/* Encapsulation refers to bundling data with methods that can operate on that data within a class
Its the idea of hiding data within a class, preventing anything outside that class from directly interacting with it.
Memebers of other classes can interact with the attributes of another object through its methods.
Methods are the functions defined within the class. Like how move was defined in the knight class
Getting Methods -> retreiving information
Setting Methods -> Changing information - also allow programmers to easily keep track of attributes that depend on one another
setting method allows multiple attributs to be changes as they should rather than requiring you to change them one by one
*/

function setCurrentHealth(newHealth){
    let currenthealth = 0;
    let maxhealth = 100;
    let player = player.currenthealth = newHealth
        if (player.currenthealth> player.maxhealth){
            player.currenthealth = player.maxhealth
        }
}

// define a getter method when you want attributes to be a 'read only ' from the outside. Meaning a variable can be references but not changed. They cab allow validations

//its gernally best not to allow external classes to directly edit an obects attrubutes
// especially important when working on large complex problems

//Encapsulation information hidding, or keeping the data of one of the classes hidden from external classes, helps you keep control of your program and prevent it from becoming too complcated
/**
 * Encapsulation:
 *  Keeps the programmer in controll of access to dat
 *  Prevents the program from ending in any strange or unwanted states
 */



/**ABSTRACTION: **/
// Abstraction refers to only showing essential details and keeping everything else hidden.
// Like a car you the classes you create shoul not have users worry about the inner details of those classes.
// Classes should not directly interact with other classes data. Important for incremental programing

// section 1 -> section 2-> section 3
//modern programs are very complex to the point where multiple programmers toend to work on one program
///Interface and Implementation
// Interface refers to the way sections of code can communicate with each other done through mehtods that classes can access
// Implmentation of these methods or how their defined should be hiden

// if classes are entangled, then one change creats a ripple effect that causes many more changes

// creating an interface through which classes can interact ensures that each piece can be individually developed

/**  abstraction allows the program to be orking incrementally and prevents it from being entangled or complex
 * Determine specific points of contatct that can acts as an interface between classes and only worry about the implementation when coding it
 */

 /**Inheritance: **/
// Inheritance allows you to have classes derive methods from other classes 
/**
 * Example weapon -> superclass
 * sword and club would be subclasses
 */

 // Access Modifer types
 // public memebers can be accessed from anywhere in your program superclasses, subclasses etc
 // private memebers can only be acces from within the same class that memeber was defined

 //protexted memebers can be accessed within the class it is defined, as well as any subclasses of that class


  /**Polymorphism: **/
//Polymorphism describes methods that are able to take on many forms
// two types
//dynamic polymorphism occurs during run time of the program. When a mehtods signature is in the sub class and superclass. Share the same name but have a different implementation
/** This works because the form of the method is decided based on where in the class hierachy it is called
 * Implementation of a method signature that will be used is dtermiend dynamically as the program is run. Allows you to write mehtods in the super class without if and else ifs for when its called
*/
//static polmorphism occurs during compile time rather than during runtime
//this refers to when multiple methods with the same name but different areguments are defined in the same class.

//Moethods overloading signatures are diffeent due to their different arguments this can cause problems if the order of the arguments are different. 

//polymopro allows methods to take on many different forms but be sure to call the correct form of the method