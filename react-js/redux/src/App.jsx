import { useSelector, useDispatch } from "react-redux"

export default function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => {
    return state.counter.count
  })
  const handleClick = () => {
    dispatch({
      type: "counter/increment"
    })

  }
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
    
  )
}


//dispatch --> reducer --> redux state --> subscribe --> react xử lý tiếp (vì state lúc này đang là state của redux)

//function --> return action object --> action creator
