import React from 'react'
import { useState } from 'react';
import { TodoContext } from '../../TodoReducer';
import { use } from 'react';

export default function TodoAdd() {
    const [title, setTitle] = useState("")
    const { dispatch } = use(TodoContext)
    const handleAdd = (e) => {
        e.preventDefault()

        if (!title) {
            return alert("không được để trống")
        }
        const todo = {
            id: crypto.randomUUID(),
            title, 
            iscompleted: false

        }
        dispatch({
            type: "todo/add",
            payload: todo,
        })
        console.log(todo);
        
    }
  return (
    <form onSubmit={handleAdd}>
        <input type="text" placeholder='Title...' onChange={(e) => setTitle(e.target.value)}/>
        <button>add</button>
    </form>
    
  )
}
