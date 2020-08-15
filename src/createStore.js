export function createStore(rootReducer, initialState){
    let state = rootReducer(initialState, {type: '__INIT__'})
    const subscribers = []
    
    return {
        dispatch(action) {
            state = rootReducer(state, action) 
        },
        subscribe(callback) {
            subscribers.push(callback)
            subscribers.forEach(sub => sub())
        },
        getState() {
            return state
        }
    }
}