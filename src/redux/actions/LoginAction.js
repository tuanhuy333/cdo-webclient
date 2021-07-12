import getPeople1 from "../api/fakeApi";
import {
  FETCHING_LOGIN,
  FETCHING_LOGIN_SUCCESS,
  FETCHING_LOGIN_FAILURE,
} from "../constants/ActionTypes";
import { loginAPI } from "../../services/user";

// action call API and dispatch save store
export function fetchDataLogin(email, password) {
  return (dispatch) => {
    var data = {
      email,
      password,
    };

    loginAPI(data).then();

    dispatch(getData());

    // axios call API login here !!!
    dispatch(getLoginSuccess(email)); // truyền user name + access
    // getPeople1()
    //     .then((data) => {
    //         dispatch(getLoginSuccess(data)) // truyền user name + access
    //     })
    //     .catch((err) => console.log('err:', err))
  };
}

// action save store
export function getData() {
  return {
    type: FETCHING_LOGIN,
  };
}

export function getLoginSuccess(data) {
  return {
    type: FETCHING_LOGIN_SUCCESS,
    data,
  };
}

export function getDataFailure() {
  return {
    type: FETCHING_LOGIN_FAILURE,
  };
}
