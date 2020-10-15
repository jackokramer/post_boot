import React from 'react'

const Book = ({img, title, author, info}) =>{
  //console.log(props);
  //const {img, title, author, info} = props.book
  // attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) =>{
    console.log(e);
    console.log(e.target);
    alert('bought the book!!')
  }
  const complexExample = (author) => {
    console.log(author);
  }
  return (
  <article className="book" 
  onMouseOver={()=> {
    console.log(title);
  }}>
<h1 onClick={() => console.log(title)}>{title}</h1>
<img src={img} alt="photos"/>
<p>By:</p>
<h3>{author}</h3>
  <p>{info}</p>
  <button type="button" onClick={clickHandler} className="btn btn-primary">Reference example</button>
  <button type="button" onClick={()=> complexExample(author)}>More complex example</button>
      </article>
    );
}


export default Book
