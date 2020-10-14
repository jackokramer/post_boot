import React from 'react';
import ReactDom from 'react-dom';


//CSS

import './index.css'
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

const firstBook ={
  img: "img/external-content.duckduckgo.jpg",
  title: 'Van Halen the Full Book on his Life',
  author: "Niels Clyne"

}
/*
Instead of writting variables to make something more personable add it into a object an make it stand out
const author = "Niels Clyne";
const title = 'Van Halen the Full Book on his Life'
const image = "img/external-content.duckduckgo.jpg"
*/

function BookList(){
  return (
  //<React.Fragment>
  <section className="booklist">
      <h2>Book Info</h2>
        <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/> 
        <Book title="random" number={17}/>
  </section>
  );
  //</React.Fragment>
  // always must return something
}
// VARIABLES

const Book = (props) =>{
  console.log(props)
  return (
  <article className="book">
<img src={props.img} alt="van halen"/>
<h1>{props.title}</h1>
<p>By:</p>
<h3>{props.author}</h3>
    <p>This is a book about Eddie Van Halen and how he became the greatest American success story</p>
  <p>{props.job}</p>
  <p>{props.title}</p>
      </article>
    );
}

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