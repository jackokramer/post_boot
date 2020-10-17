import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

// all about refactoring

const ControlledInputs = () => {
  //const [firstName, setFirstName] = useState('');
  //const [lastName, setLastName] = useState('');
  //const [email, setEmail] = useState('');
  //const [age, setAge] = useState('');
  const [person, setPerson] = useState({firstName:'', lastName:'', email:'', age:''})
  const [people, setPeople] = useState([]);
/*
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, lastName, email, age };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      setLastName('');
      setEmail('');
      setAge('');
    } else {
      console.log('empty values');
    }
  };
  */

  const handleChange= (e)=>{
    const name = e.target.name
    const value = e.target.value
    //console.log(name, value);
    setPerson({...person, [name]: value})

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(person.firstName&& person.email && person.age){
      const newPerson = {...person, id: new Date().getTime().toString()}
      setPeople([...people, newPerson])
      setPerson({firstName: '', lastName:"", email:'', age:''})
    }
  }
  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'> First Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='lastName'>Last Name : </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={person.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, lastName, email, age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <h4>{lastName}</h4>
              <p>{email}</p>
          <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
