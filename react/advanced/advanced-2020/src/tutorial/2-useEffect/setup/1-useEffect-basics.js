import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue]= useState(0);
  // cannot call hooks conditionally
      useEffect(()=>{
        console.log('call userEffect');// considered a side effect
        if(value >= 1){ // can use conditionals with in th callback function like seen on line 8
          document.title =`New messages (${value})`; 
        }
      },[value]) // the array is the list of dependancies, only runs on the intial render leave the array empty

      useEffect(()=>{
        console.log('Hola');
      }, []);
  console.log('render component')
  return <>
  <h1>{value}</h1>
    <h3>useEffect Basics</h3>
      <button className="btn" onClick={()=> setValue(value+1)}>
        Click Me</button>
  </>;
};

export default UseEffectBasics;
