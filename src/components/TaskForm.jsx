import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function TaskForm(props) {

  const [input, setInput] = useState(''); //Va a ser un string vacio para el usuario

  const handlerChange = e => {
    setInput(e.target.value)
  }

  const handlerSubmit = e => {
    e.preventDefault();
    
    const newTask = {
      id: uuidv4(),
      text:input,
      complete: false,
    }
    props.onSubmit(newTask)
  }

    return (
      <form 
        className='task-form'
        onSubmit={handlerSubmit}>
          <input 
          onChange={handlerChange}
          className='task-input'
          type="text"
          placeholder='Write a task...'
          name='text'
          />
          <button 
            className='task-button'
            >
              Add
          </button>
      </form>
    )
}
