import {decCounter, incCounter, randomCounter, resetCounter} from "../action-types";

const initialState = {
    counter: 0
}
export const reducer = (state = initialState, action) =>{
    switch (action.type){
        case incCounter:{
            return {...state, counter: state.counter + 1}
        }
        case decCounter:{
            return {...state, counter: state.counter - 1}
        }
        case resetCounter:{
            return {...state, counter: 0}
        }
        case randomCounter:{
            return {...state, counter: state.counter + action.payload}
        }
        default:{
            return state;
        }
    }
}

export default reducer;
