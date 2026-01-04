// đây chính là file cấu hình

import { combineReducers, legacy_createStore as createStore } from "redux";
import { authReducer } from "./reducers/authReducer";

const rootReducer = combineReducers({
  modal: authReducer,
});

export const store = createStore(rootReducer);


//counterReducer
//todoReducer
//authReducer

// -->rootReducer --> store

//Redux Middleware (redux thunk)
//Redux Toolkit --> đơn giản hóa quá trình làm việc với Redux