import { DECREMENT_COUNT, INCREMENT_COUNT, RESET_COUNT } from "../constant/CounterConstant";

// initial state
const initialCountState = {count: 0, number: 2};

export const counterReducer = (state= initialCountState, action) =>{
    switch (action.type) {
        case INCREMENT_COUNT:
            return{
                ...state,
                count: state.count + 1
            }
        case DECREMENT_COUNT:
            return{
                ...state,
                 count: state.count === 0 ? 0 : state.count - 1, 
            }
        case RESET_COUNT:
            return{
                count: 0
            }
    
        default:
            return state;
    }
}
