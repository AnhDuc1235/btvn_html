import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
        todoList: [],
        status: "idle",
        message: "",
    },

    //reducer chứa các action creator
    //reducers phải có s
    reducers: {
        // initTodolist: (state, action) => {
        //     state.todoList = action.payload
        //     state.status = "success"
        //     //logic viết trực tiếp trong này (không phải viết switch case nữa)
        // },
        // updateError: (state) => {
        //     state.status = "error"
        //     //logic viết trực tiếp trong này (không phải viết switch case nữa)
        // },
        increment: (state, action) => {
            state.count += action.payload
            //logic viết trực tiếp trong này (không phải viết switch case nữa)
        },
        decrement: (state, action) => {
            state.count -= action.payload
            //logic viết trực tiếp trong này (không phải viết switch case nữa)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTodos.pending, (state) => {
            state.status = "pending"
        })
        builder.addCase(getTodos.fulfilled, (state, action) => {
            state.todoList = action.payload
            state.status = "success"
        })
        builder.addCase(getTodos.rejected, (state, action) => {
            state.status = "error"
            state.message = action.payload
        })
    }

    //lấy name: counter nối với increment/decrement để ra type

})

// có thể xử lý export const { increment, decrement } = counterSlice.actions
// để sang app.jsx sẽ gọi nó import { increment, decrement } from "./store/slice/counterSlice"

export const { increment, decrement } = counterSlice.actions


// export const getTodos = () => {
//     return async (dispatch) => {
//         try {
//             const response = await fetch("https://jsonplaceholder.typicode.com/todos")
//             const todos = await response.json()
//             console.log(todos);
//             dispatch(initTodolist(todos))
            
//         } catch {
//             dispatch(updateError())
//         }
//     }
// } 

export const getTodos = createAsyncThunk("getTodos", async (_, {
    rejectWithValue
}) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        if (!response.ok) {
            throw new Error("fail to fetch")
        }
        const todos = await response.json()
        // console.log(todos);
        return todos
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})