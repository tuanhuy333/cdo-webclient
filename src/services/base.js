// @flow
import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import axios from "axios";
import isServer from "../utils/is-server";
import * as cookie from "js-cookie";
import * as _ from "lodash";
import { TOKEN_KEY, REFRESH_TOKEN } from "../constants/appConst";

const { REACT_APP_API_URL } = process.env;

export const CallAPI = (endpoint, method = "GET", body) => {
  let token = null;
  var headers = {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  token = cookie.get(TOKEN_KEY);

  if (token && token !== "undefined") {
    headers.Authorization = `Bearer ${token}`;
  }

  return axios({
    method: method,
    url: `${REACT_APP_API_URL}/${endpoint}`,
    headers: headers,
    data: body,
  }).catch((err) => {
    console.log(err);
  });
};
