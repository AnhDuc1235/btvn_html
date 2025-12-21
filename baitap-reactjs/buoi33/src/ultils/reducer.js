import TodoList from "../components/Todos/TodoList";

export const reducer = (state, action) => {
    switch (action.type) {
        case "counter/increment": {
            return {
                ...state,
                count: state.count + action.payload
            }
        }
        case "todo/add": {
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        }
        case "todo/delete": {
            return {
                ...state,
                todoList: state.todoList.filter((todo) => todo.id !== action.payload),

                
            }
        }
        case "todo/completed": {
            return {
                ...state,
                todoList: state.todoList.map((todo => {
                    if (action.payload === todo.id) {
                        return {
                            ...todo,
                            isCompleted: !todo.isCompleted

                        }
                    }
                    return { ...todo }
                }))
                
            }
        }
        
    
        default: {
            return state;
        }
            
    }
}
export const initialState = {
    count: 0,
    produces: [],
    todoList: [],
}