import React from 'react';
import ReactDom from 'react-dom';


// stateless functional component
//always return JSX

//CSS
import './index.css'

import {books} from './books'
import Book from './Book'
import {getting} from "./testing/testing"


function BookList(){
  console.log(getting)
  return (
    <section className="booklist">
      {books.map((book, index)=> {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

//using props allows you to set up unique values

ReactDom.render(<BookList/>, document.getElementById('root'))