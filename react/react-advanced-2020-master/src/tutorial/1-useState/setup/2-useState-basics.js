import React, { useState } from 'react';

const UseStateBasics = () => {
  //use
  //components name must be uppercase
  //must be in rhe function/component body
  // cannot call conditionally
  //console.log(useState('hello world'));
  //const value = useState(1)[0]
  //const handler = useState(1)[1]
  //console.log(value, handler)
  const [text, setText] = useState('random title')
  const handleClick = () =>{
    if(text === 'random title'){
    setText('hellp porld');
    } else{
      setText('random title');
    }
  };
  return (
  <React.Fragment>
  <h2>{text}</h2>
  <button className="btn" onClick={handleClick}>Change Title</button>
  </React.Fragment>
  );
};

export default UseStateBasics;
