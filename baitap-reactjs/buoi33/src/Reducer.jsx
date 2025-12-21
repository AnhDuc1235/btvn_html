import { useReducer } from "react"
import { initialState, reducer } from "./ultils/reducer";

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "counter/increment": {
//             return {
//                 ...state,
//                 count: state.count + action.payload
//             }
//         }
        
    
//         default: {
//             return state;
//         }
            
//     }
// }
// const initialState = {
//     count: 0,
//     produces: [],
//     todoList: [],

// }
export default function Reducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handlerIncrement = () => {
        //dispatch --> object action: {type: "ten", payload: du-lieu-gui-len}
        dispatch({
            type: "counter/increment",
            payload: 1,

            //du lieu truyen len reducer
        })
    }
  return (
    <div>
        <h1>Count: {state.count}</h1>
        <button onClick={handlerIncrement}>Up</button>
    </div>
  )
}

//usestate(init)

//const [value, setValue] = useState(init)
//logic update state --> trong component --> xử lý state
//nội bộ, không kế thừa được logic tới các component khác

//Giải pháp: tách logic cập nhật state ra bên ngoài
//- Sử dụng concept của hàm reduce array
//- Logic nằm ở hàm reducer

//Bên array: array.reduce(callback, initialValue)

//ý nghĩa:
// - Giải quyết các state phức tạp trong component
// - Muốn kế logic cập nhật state (áp dụng khi cần share state tới nhiều component)