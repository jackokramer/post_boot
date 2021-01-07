import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Counter (){
    let [count, setCount] = useState(0)
    return (
      <div>
        <button onClick={() => {
          setCount(count - 1 );
        }}>-</button>
        {this.state.count}
        <button onClick={() => {
          setCount(count + 1);
        }}>+</button>
      </div>
    );
}

const domElement = document.getElementById('root')

ReactDOM.render(<Counter />, domElement)

/*
// Component EXAMPLE
const Component = () => <div>Holllla!!!</div> // a function that returns an element rather than an element itself

// React Element
const reactElement = <div>Holllla!!!</div>

const domElement = document.getElementById('root')
ReactDOM.render(reactElement,domElement);

ReactDom.render(<Component/>, domElement);

// Whats the difference between Virtual DOM and the "Real DOM"?
// My Answer: Virtual DOM ist set up on a virtual machine. While the real dom is set up on an actaully server or cloud based server.
/* Virtaul DOM - can't directly update HTML. 
**Acts as a copy of the real DOM, which can be frequently manipulated and updated without a page refresh. 
**More of a Pattern than a specific technology.
** Syched with real DOM through 'react-dom'
*/

/**Real DOM 
 * Directly updates and manipulates html
 * Creates a new DOM/full repaint if it is updated.
 * An object based representation of an HTML document + an interface for manipulating that object
*/

//Shadow Dom is not the same as the Virtaul DOM. Shadow DOM is a browser specific stylizer tool

/**  React Limitations
Its a library, not a framework. Something that enhances your existing code. 
It is large and can live inside one div.
Being owned my Facebook.... Gross lack of transparency. 
Documentation - doesn't touch on function components but has a lot on class based components
*/

/** JSX
 * What is JSX?
 * JavScript XML. ALlows you to write template syntax inside of javascript.
 * What is the difference between an element and a component?
 * An element is associated with html tag or css stylezed item. While a component is associated with JavaScript.
 * ACTUAL ANSWER: An element is something created by JSX as an object. A component is a function that returns an element.
 * YOu can write React without JSX
 */

 /*Props for
 // How do you pass a value from parent to child or child -> parent?
 YOU DO IT VIA PROPS.
 From child to parent  -> pass a function prop
 */

 /**
  * Prop drilling - drilling down components
  */

  /**
   * YOU CANNOT MODIFY props SINCE THEY ARE READ ONLY.
   * Functions are meant to be pure components.
   */

// STATE AND LIFE CYCLE.

/**
 * Most misunderunderstood section of react.
 * Difference between props and state?
 * Props are both javascript objects and hold information on what will be rendered. State is managed within a given component. State is somehting you can access only inside a component scoped and local.
 * What is the difference between state in a class component versus state in a function component?
State is something that persists across that class component. A state function component is something called multiple times something that is recalled when a state changes.
 */

// What is the component lifecycle?
// 3 main parts. Mounting, unmounting and updating.
/*
1) Mounting - Render and componentDidMount. 
2) Updating - Render and componentDidUpdate. 
3) UnMounting - Conponent unmount when a componentWillUnmount -  go away like an event listener.
*/

/* How do you update the life cycle in function components?
ANSWER: use a hook called useEffect. 
*/

/**EFFECTS
 * What parameter does the useEffect take into account?
 * FIRST one is a function that
 * SECOND dependancy array that decided when it runs out
 * 
 * When does the useEffect function run out?
 * UnMount when things update
 * 
 * - [] -> Runs on Mount
 * [variable] -> Runs on mount and when variable changes
 *  - No array -> Runs on mount and every state change
 */

 /**
  * What is useEffect functions's return value?
  * Called a clean up function. Cleans up event listeners that the component is about to unmount
  */

/*refs 
// What is the difference between refs and state variables?
// Very similar objectst that contain values.

//When is the best time to use refs?
Never really. Don't over use theme_color
- Managing focus or media focus
- triggering Animations
- intergrating with DOM libraries
What is the proper way to update a ref in a function component?
- Their effects. Use an effect to do so
*/

/**Context
 *  Difference between prop_drilling and context api?
 * ANSWER: prop_drilling is for a proper child component to get - passing from component to component to component. 
 * Context API what given values a child component can have. YOU define something at the top level.
 * You shouldn't over use the context api... It can lead to unnecessary rerenders. Built on reducx and its unnecessary rerenders
*/

/**
Question: What is a fragement?
Answer: its a container to hold onto different elements. creates an empty element that doesn't return anything in the DOM but holds onto a value
When should you use a class based component versus a function based component?
Never use class based components, only use them for ERROR BOUNDARIES. Use function based components instead.
Question: What is a higher order component?
Answer: A function that takes in a component and sends another component. Used for reusieng component logic. 

Question: What is a portal?
ANSWER: A way to render children into a DOM node outside of the dom heirarchy of the parent component. It can live anywhere in the DOM tree.

Question: What are controlled and uncontrolled components?
Answer: Uncontrolled components are input values user manipulated components <input> before different DOM uses from real dom jquery to virtual dom react?
Answer: You have a given input and react controlls it.

*/

/** 
What We covered
- The DOM vs the Virtaul DOM vs
- Why React
-Fundamentals (props, state, jsx, lifecycle)
-Hooks (useEffect, useRef)
-Context API
-state vs class components
*/
