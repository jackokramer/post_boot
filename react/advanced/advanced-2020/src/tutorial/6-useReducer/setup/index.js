import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
import {reducer} from "./reducer"

// Will add more strucuture to your state

  const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: 'hello'
  }

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

const handleSubmit = (e) =>{
  e.preventDefault();
  if(name){
    const newItem = {id:new Date().getTime().toString(), name}
    dispatch({type: 'Add_ITEM', payload:newItem})
    setName('')
  } else{
    dispatch({type: 'No_value'})
  }
}

const closeModal = () =>{
  dispatch({type:"CLOSE_MODAL"})
}

  return <> 
  {state.isModalOpen && <Modal closeModal = {closeModal} modalContent={state.modalContent}/>}
  <form onSubmit={handleSubmit} className="form">
    <div>
      <input 
      type="text" 
      value={name} 
      onChange={(e)=>setName(e.target.value)}/>
      </div>
      <button className="btn" type="submit">Add</button>
  </form>
  {state.people.map((person) =>{
    return ( 
    <div key={person.name} className="item">
      <h2>{person.name}</h2>
      <button onClick={() =>{dispatch({type:'Remove_Item', payload:person.id})}}> remove</button>
    </div>
    )
  })}
  </>;
};

export default Index;
