import React from 'react';
import ReactDom from 'react-dom';

// stateless functional component
//always return JSX

//CSS
import './index.css'
const books = [
  {
  id:1,
  img:"https://images-na.ssl-images-amazon.com/images/I/81hx39H8JEL._AC_UL200_SR200,200_.jpg",
  title: "The World Needs Who You Were Made to Be",
  author: "Joanna Gaines"
},
{
  id:2,
  img:"https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg",
  title: "If Animals Kissed Good Night",
  author: "Ann Whitford Paul"
},
{
  id:3,
  img:"https://images-na.ssl-images-amazon.com/images/I/81GeAcdMCsL._AC_UL200_SR200,200_.jpg",
  title: "Humans",
  author: "Brandon Stanton"
}
]

function BookList(){
  return (
    <section className="booklist">
      {books.map((book, index)=> {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}
const Book = (props) =>{
  console.log(props)
  const{img, title, author} = props;
  return ( <article className="book">
    <img src={img}  alt=""/>
<h1>{title}</h1>
<h4>{author}</h4>
    </article>
  )
}
//using props allows you to set up unique values

ReactDom.render(<BookList/>, document.getElementById('root'))