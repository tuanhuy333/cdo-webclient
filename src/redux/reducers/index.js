import { combineReducers } from 'redux'
import postReducer from './PostReducer'
import userReducer from './UserReducer'
import dataReducer from './dataReducer'
import LoginReducer from './LoginReducer'

const rootReducer = combineReducers({
        postReducer,
        userReducer,
        dataReducer,
        LoginReducer
})

export default rootReducer;