// đây chính là file cấu hình

import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"
import { todoReducer } from "./reducers/todoReducer"
import { loggerMiddleware } from "./middlewares/loggerMiddleware"
import { CounterReducer } from "./reducers/counterReducer"
import { thunkMiddleware } from "./middlewares/thunkMiddleware"

const rootReducer = combineReducers({
    counter: CounterReducer,
    todo: todoReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


//counterReducer
//todoReducer
//authReducer

// -->rootReducer --> store

//Redux Middleware (redux thunk)
//Redux Toolkit --> đơn giản hóa quá trình làm việc với Redux