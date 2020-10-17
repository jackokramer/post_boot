import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

//How controlled inputs work with lists

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(firstName && email){
      const person = {id: new Date().getTime().toString(),firstName, email};
      console.log(person);
      setPeople((people)=>{
        return [...people, person] // practice setting up functions as well
      });
      setFirstName(''); // clears the values in the state onces its submitted
      setEmail('');
    } else{
    console.log('empty values')
    }
  }; 
  return <>
  controlled inputs
  <article>
    <form className="form">
      <div className='form-control'>
        <label htmlFor="firstName">Name:</label>
        <input 
        type="text" 
        id="firstName" 
        name="firstName" 
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        />
        </div>
        <div className='form-control'>
        <label htmlFor="email">Email:</label>
        <input 
        type="text" 
        id="email" 
        name="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </div>
              <button className="btn" type='submit' onClick={handleSubmit}>Add Person</button>
    </form>
    {
      people.map((person, index) =>{
        const {id, firstName, email} = person
        return (
        <div className="item" key={id}>
          <h4>{firstName}</h4>
      <p>{email}</p>
        </div>
        );
      })
    }
  </article>
  </>;
};

export default ControlledInputs;
