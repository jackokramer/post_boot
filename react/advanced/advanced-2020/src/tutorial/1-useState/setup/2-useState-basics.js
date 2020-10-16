import React, { useState } from 'react';
/*
use
component state needs to be uppercase
must be in the function component body
cannot call conditionally
**/


const UseStateBasics = () => { //Hook needs to be invoked in the function body
  //console.log(useState('adios'))
  //const value = useState(1)[0]
  //const handler = useState(1)[1]
  //console.log(value, handler);
  const [text, setText] = useState('Adios'); // hook here
  const handleClick= () =>{
    if(text === 'Adios'){
    setText('Hola Mundo');
    } else {
      setText('Adios');
    }
  };
  return <React.Fragment>
    <h1>{text}</h1>
    <button type="button" className="btn" onClick={handleClick}>
      Change Title
    </button>
  </React.Fragment>;

};

export default UseStateBasics;
