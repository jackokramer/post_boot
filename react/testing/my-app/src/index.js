import React from 'react';
import ReactDom from 'react-dom';


//CSS

import './index.css'
import Book from './Book'
import {books} from './books'
import {greeting} from './testing/testing'


//stateless functional component
//always returns JSX
//JSX Rules 
//return single element
// div/section/ article or Fragment
// use  camel Case for html attributes
//className instead of class
//close every element
//formatting

//Nested App Component, React Tools



/*
Instead of writting variables to make something more personable add it into a object an make it stand out
const author = "Niels Clyne";
const title = 'Van Halen the Full Book on his Life'
const image = "img/external-content.duckduckgo.jpg"
*/


function BookList(){
  console.log(greeting)
  return (
  //<React.Fragment>
  <section className="booklist">
      <h2>Book Info</h2>
      {books.map((book, index)=>{
      return(
        <div>
                  <Book key={book.id} {...book}></Book>
        </div>
      );
      })}
  </section>
  );
  //</React.Fragment>
  // always must return something
}
// VARIABLES


/*
const Image = () => <img src="img/external-content.duckduckgo.jpg" alt=""/>
const Author = () => <p> By:<h3 style={{color: 'blue', fontSize: '2rem', marginTop: ".25rem"}}>Niels Clyne</h3> </p> // to style a tag you need {{}} and the value needs to be a string

const Title = () =>  <h1>Van Halen the Full Book on his Life</h1>
*/

//const Person = () => <h1>Home</h1>;
//const Message = () =>{
//  return <p>The message is written here</p>
//}

/*another way to write a function
const Greeting = () =>{
  return React.createElement('h2', {}, 'Hello world'); // 1st html element, second prop{}, third content in our element
}
*/

ReactDom.render(<BookList/>, document.getElementById('root'));