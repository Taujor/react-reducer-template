export const actions = {
    INCREMENT: "increment",
    DECREMENT: "decrement"
}
  

export function reducer(state, action){
    switch (action.type) {
        case actions.INCREMENT:
            return {
                count: state.count + 1
            }
        case actions.DECREMENT:
            return {
                count: state.count - 1
            }
  
        default:
            return state
    }
}