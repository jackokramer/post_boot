import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter', 
    age:32, 
    message:'Hi there message'
  });

const [name, setName] = useState('Jack')
const [age, setAge] = useState(27) 
const [message, setMessage] = useState('random message')

const changeMessage = () =>{
  //setPerson({...person, message: 'Hola'}); // solution use a spread operator ...
  setMessage('hola mundo ')
}
  return (
  <>
   <h2>{name}</h2>
      <h2>{age}</h2>
         <h2>{message}</h2>
         <button className="btn" onClick={changeMessage}> Change Message</button>
   </>
   )
};

export default UseStateObject;
