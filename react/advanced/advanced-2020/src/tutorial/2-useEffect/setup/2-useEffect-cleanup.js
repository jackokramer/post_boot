import React, { useState, useEffect } from 'react';

// cleanup function
// second argument
// check size of the window

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

const checkSize = () =>{
  setSize(window.innerWidth) // set size is triggering the rerender
}

  useEffect(()=>{
    console.log(`useEffext to ${size}px`)
    window.addEventListener('resize', checkSize)
    return () =>{
      console.log('cleanup');
      window.removeEventListener('resize', checkSize)
    }
  });
  console.log('render')
  return ( 
  <>
  <h1>useEffect cleanup</h1>
      <h2>window</h2>
<h3>{size}px</h3>

  </>
  );
};

export default UseEffectCleanup;
