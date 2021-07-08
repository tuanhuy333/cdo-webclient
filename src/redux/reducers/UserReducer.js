import { ADD_POST, EDIT_POST, UPDATE_POST, DELETE_POST } from '../constants/ActionTypes';


const initialState = []

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return state;

        

        default:
            return state;
    }
}

export default userReducer;