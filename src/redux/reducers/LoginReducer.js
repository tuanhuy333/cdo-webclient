import { FETCHING_LOGIN, FETCHING_LOGIN_SUCCESS, FETCHING_LOGIN_FAILURE } from '../constants/ActionTypes'

const initialState = {
        data: [],
        dataFetched: false,
        isFetching: false,
        error: false,
        isAuthUser: !!localStorage.getItem("user"),
        user: JSON.parse(localStorage.getItem("user")) || {},
}

export default function LoginReducer(state = initialState, action) {
        console.log("Action", action)
        switch (action.type) {
                case FETCHING_LOGIN:
                        return {
                                ...state,
                                data: [],
                                isFetching: true
                        }
                case FETCHING_LOGIN_SUCCESS:
                        localStorage.setItem("user", JSON.stringify(action.data));
                        return { ...state, isAuthUser: true, user: action.data };
                case FETCHING_LOGIN_FAILURE:
                        return {
                                ...state,
                                isFetching: false,
                                error: true
                        }
                default:
                        return state
        }
}