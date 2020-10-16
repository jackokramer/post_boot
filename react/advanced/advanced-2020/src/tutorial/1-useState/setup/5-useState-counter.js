import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () =>{
    setValue(0);
  } // reference set up for reset

  const complexIncrease = () =>{
    setTimeout(()=>{
      //setValue(value + 1); // set function is asynchronous
      setValue((prevState)=>{
        return prevState +1;
      })
    },2000); // sets it up two seconds later
  }
  return <>
  <section style={{margin: '4rem 0'}}>
    <h1>Regular counter</h1>
  <h3>{value}</h3>
    <button className="btn" onClick={()=> setValue(value-1)}>decrease</button>
    <button className="btn" onClick={reset}>reset</button>
    <button className="btn" onClick={()=> setValue(value+1)}>increase</button>
  </section>
    <section style={{margin: '4rem 0'}}>
    <h1>More complex counter</h1>
  <h3>{value}</h3>
    <button className="btn" onClick={complexIncrease}>increase later</button>
  </section>
  </>;
};

export default UseStateCounter;
