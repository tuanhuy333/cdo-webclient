import getPeople1 from '../api/fakeApi'
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants/ActionTypes'

// action call API and dispatch save store
export function fetchData() {
        return (dispatch) => {
                dispatch(getData())

                // axios call API here !!!
                getPeople1()
                        .then((data) => {
                                dispatch(getDataSuccess(data))
                        })
                        .catch((err) => console.log('err:', err))
        }
}

// action save store
export function getData() {
        return {
                type: FETCHING_DATA
        }
}

export function getDataSuccess(data) {
        return {
                type: FETCHING_DATA_SUCCESS,
                data,
        }
}

export function getDataFailure() {
        return {
                type: FETCHING_DATA_FAILURE
        }
}
