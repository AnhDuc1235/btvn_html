export const thunkMiddleware = (store) => {
    return (next) => {
        return (action) => {
            // console.log(action);
            if (typeof action === "function") {
                return action(store.dispatch, store.getState)
            }
            return next(action)
            
        }
    }
}

//tach ham (action creator)
export const getTodos = () => {
    return async (dispatch, getState) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const todos = await response.json()
        console.log(todos);
        dispatch({
            type: "todos/init-data",
            payload: todos
        })
    }
} 

//thunk function