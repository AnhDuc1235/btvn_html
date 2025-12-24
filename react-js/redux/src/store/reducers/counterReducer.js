const initialState = {
    count: 0
}

export const CounterReducer = (state = initialState, action) => {

    switch (action.type) {
        case "counter/increment":{
            return {
                ...state,
                count: state.count + 1
            }
        }
            
            break;
    
        default: {
            return state
        }
            break;
    }
}