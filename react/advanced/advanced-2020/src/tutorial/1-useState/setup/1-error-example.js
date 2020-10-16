import React from 'react';

const ErrorExample = () => {
  let title = 'Random Title';
  const handleClick = () =>{
    title = 'hello people'
    console.log(title);
  }
  return <React.Fragment>
    <h2>{title}</h2>
    <buttton type="button" className="btn" onClick={handleClick}>
      Change Title
    </buttton>
    </React.Fragment>;
};

export default ErrorExample;
