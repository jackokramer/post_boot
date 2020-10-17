import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/jackokramer';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false); // good practice to use is for naming boolean values
  const [user, setUser] = useState('default user');
  
  
useEffect(()=>{
  fetch(url) // fetch can error with a network error not a 404 error
  .then((resp)=>{
    if(resp.status >= 200 && resp.status <=299){
      return resp.json()
    } else {
      setIsLoading(false)
      setIsError(true)
      throw new Error(resp.statusText);
    }
  })
  .then((user)=> {
    const {login} =user;
    setUser(login)
    setIsLoading(false);
  })
  .catch((error) => console.log(error));
},[]);

  if(isLoading){
    return (
    <div> 
      <h2>loading.........</h2>
    </div>
    );
  } 
  if(isError){
    return (
        <div> 
      <h2>redirecting you to login page.........</h2>
    </div>
    );
  }
  return (
    <div>
    <h2>{user}</h2>
    </div>
    );
};

export default MultipleReturns;
