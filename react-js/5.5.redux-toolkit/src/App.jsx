import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { counterSlice, getTodos } from './store/slice/counterSlice';
import { useEffect } from 'react';
import { increment, decrement, getTodos } from './store/slice/counterSlice';
import { useBackToTop } from './hooks/useBackToTop';

// hoặc destruct
export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count)
  const todoList = useSelector((state) => state.counter.todoList)
  const status = useSelector((state) => state.counter.status)
  const message = useSelector((state) => state.counter.message)
  // console.log(todoList);
  // const [showBackToTop, setShowBackToTop] = useState(false)
  const {showBackToTop, handleScrollTop} = useBackToTop(100)
  

  const handleIncrement = () => {
    dispatch(increment(10))
  }
  const handleDecrement = () => {
    dispatch(decrement(10))
  }
  
  useEffect(() => {
    dispatch(getTodos());
    // const handleScroll = () => {
    //   const pos = window.scrollY
    //   setShowBackToTop(pos > 100)
    // }
    // window.addEventListener("scroll", handleScroll)
    // return () => {
    //   window.removeEventListener("scroll", handleScroll)
    // }

  }, [])
  if (status === "pending") {
    return <h3>Loading...</h3>
  }
  if (status === "error") {
    return <h3>{message}</h3>
  }
  return (
    <div>
      <h1>count {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      {
        todoList.map((todo) => {
          return <h3 key={todo.id}>{todo.title}</h3>
        })
      }
      {showBackToTop && <button onClick={handleScrollTop} style={{
        position: "fixed",
        right: "10px",
        bottom: "10px"
      }}>Top</button>}
    </div>
  )
}


//reducer
//action
//action creator
//dispatch
//state
//middleware

//redux toolkit --> Đóng gói lại thành 1 thư viện

//core concept: 

//slice: state, action, action creator, reducer, (middleware làm việc kiểu thunk rồi nên không thuộc slice)
//

//Custom hook
// - Hàm đặc biệt: Bắt đầu từ khóa use
// - Được phép sử dụng các hook khác
// - Không trả về giao diện (jsx)
// Tóm lại: custom hook giống như 1 component nhưng không trả về jsx, nhằm mục đích kế thừa logic