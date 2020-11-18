import React from 'react';

const ErrorExample = () => {
  let title = 'random title'
  const handleClick= () =>{
    title = 'ola peoples'
    console.log(title);
  }
  return(
  <React.Fragment>
   <h2>useState error example</h2>
  <h3>{title}</h3>
  <button type="button" className="btn" onClick={handleClick}>Change Title</button>
    </React.Fragment>
   );
};

export default ErrorExample;
