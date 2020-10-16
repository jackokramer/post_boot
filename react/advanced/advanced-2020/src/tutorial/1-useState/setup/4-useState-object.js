import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'jack', 
    age: 31, 
    message:'Pogba suxs'
  })//hook here

  const [name, setName] =  useState('Jessica')
  const [age, setAge] =  useState(27)
  const [message, setMessage] =useState('I like to dance the night away')

  const changeMessage = () =>{
    //setPerson({...person, message: 'hello world'});
    setMessage("hola")
  }
  
  return ( 
  <>
    <h3>{age}</h3>
    <h3>{name}</h3>
    <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change Message
      </button>
  </>
  );
};

export default UseStateObject;
