import React from 'react';
import ReactDom from 'react-dom';

// stateless functional component
//always return JSX

//CSS
import './index.css'

const author = "Ann Whitford Paul";
const title = 'I Animals Kissed Good Night';
const image =  'https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg'

function BookList(){
  return (
    <section className="booklist">
  <Book/>
    </section>
  )
}
const Book = (props) =>{
  return ( <article className="book">
    <img src={image}  alt=""/>
<h1>{title}</h1>
<h4>{author}</h4>
<p>{6+6+6}</p>
    </article>
  )
}


ReactDom.render(<BookList/>, document.getElementById('root'))