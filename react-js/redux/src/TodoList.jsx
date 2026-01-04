import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from './store/store'
import { getTodos } from './store/middlewares/thunkMiddleware'

export default function TodoList() {
  const dispatch = useDispatch()
  const todoList = useSelector((state) => state.todo.todoList)
  console.log(todoList);
  
  useEffect(() => {
    dispatch(getTodos())
  }, [])
  return (
    <div>
      <h1>Todo List</h1>
      {todoList.map((todo) => {
        return <h4 key={todo.id}>{todo.title}</h4>
      })}
    </div>
    
  )
}

//UI --> Call API --> Dispatch --> x
//UI --> Dispatch --> Middleware --> Call API --> Dispatch --> Reducer