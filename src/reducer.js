

const initialState = {
    users: []
}

export const reducer = (state = initialState, action) =>{
    switch (action.type){
        case 'ADD':{
            return {...state, users:[...state.users, action.payload]}
        }
        case 'DEL':{
            let arrFilter = state.users.filter(value=> value.id !== action.payload);
            return {...state, users: arrFilter}
        }
        default:{
            return state;
        }
    }
}
