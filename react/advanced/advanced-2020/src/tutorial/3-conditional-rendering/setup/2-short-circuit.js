import React, { useState } from 'react';
// short-circuit evaluation true or false
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  //const firstValue = text || 'hello world';
  //const secondValue = text && 'hello world';
 //console.log(secondValue);
  return ( <>
  {/*<h1>{firstValue}</h1>
<h1>value: {secondValue}</h1>*/}
    {/*if(){console.log('hillo')}*/}
<h1>{text || 'jack was here'} </h1>
<button className="btn" onClick={()=> setIsError(!isError)}> Toggle Error</button>
{isError && <h1>'Error...'</h1>} 
{isError ? (<p>There we are there is an error</p>): (<div>
  <p>There is no error</p>
  </div>)}
{/*{!text && <h1>'jack was here and conquered!'</h1>}*/}
  </>
  );
};

export default ShortCircuit;

// you can flip it and reverse a truthy expression by putting the ! in front
