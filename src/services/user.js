// @flow
import { CallAPI } from "./base";

export const loginAPI = (data) => CallAPI("auth/login", "post", data);
