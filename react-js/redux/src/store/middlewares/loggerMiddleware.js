export const loggerMiddleware = (store) => {{
    return (next) => {
        return (action) => {
            // store.dispatch({
            // gui dispatch
            // })
            // const count = store.getState().counter.count
            // if (count >= 15) {
            //     return
            // }
            
            return next(action)
        }
    }
}}
//store -> next -> action