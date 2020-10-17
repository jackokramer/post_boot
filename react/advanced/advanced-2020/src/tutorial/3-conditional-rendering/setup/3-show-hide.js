import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShowFunction] = useState(false)
  return <> <h1>show/hide</h1>
  <button className="btn" onClick={()=> setShowFunction(!show)}>Show/Hide</button>
  {show && <Item/>}
  </>;
};

const Item = () =>{
  const [size, setSize] = useState(window.innerWidth)

  const checkSize =() => {
  setSize(window.innerWidth)
  };
  useEffect(()=>{
    window.addEventListener('resize', checkSize) // clean up function here is important cause every reload resizes it
  })
  return (
  <div style= {{marginTop: '2rem'}}>
    <h1>Window</h1>
      <h2>Size: {size} px </h2>
  </div>
);
}

export default ShowHide;
