import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants/ActionTypes'
const initialState = {
        data: [],
        dataFetched: false,
        isFetching: false,
        error: false
}

export default function dataReducer(state = initialState, action) {
        switch (action.type) {
                case FETCHING_DATA:
                        return {
                                ...state,
                                data: [],
                                isFetching: true
                        }
                case FETCHING_DATA_SUCCESS:
                        return {
                                ...state,
                                isFetching: false,
                                data: action.data // from api data
                        }
                case FETCHING_DATA_FAILURE:
                        return {
                                ...state,
                                isFetching: false,
                                error: true
                        }
                default:
                        return state
        }
}