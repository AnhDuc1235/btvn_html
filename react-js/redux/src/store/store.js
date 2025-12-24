// đây chính là file cấu hình

import { combineReducers, legacy_createStore as createStore } from "redux"
import { todoReducer } from "./reducers/todoReducer"
import { CounterReducer } from "./reducers/CounterReducer"

const rootReducer = combineReducers({
    counter: CounterReducer,
    todo: todoReducer
})
export const store = createStore(rootReducer)


//counterReducer
//todoReducer
//authReducer

// -->rootReducer --> store

//Redux Middleware (redux thunk)
//Redux Toolkit --> đơn giản hóa quá trình làm việc với Redux