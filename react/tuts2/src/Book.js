import React from 'react'

const Book = ({img, title, author}) => {
  //const{img, title, author} = props;
    // console.log(props)
  // attribute, eventHandler
  // onClick, onMouseOver 
  const clickHandler = (e) =>{
    console.log(e);
    console.log(e.target)
    alert('Hola')
  }
  const complexExample = () => {

  }
  return ( 
  <article className="book" onMouseOver={()=>{
  }}>
    <img src={img}  alt=""/>
<h1 onClick={()=> console.log(title)}>{title}</h1>
<h4>{author}</h4>
<button type="button" onClick={clickHandler}>reference example</button>
<br />
<button type="button" onClick={() => complexExample(author)}>
  more complex example</button>
    </article>
  )
}

export default Book
