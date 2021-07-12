// @flow
import { CallAPI } from "./base";

export const getEmployeeAPI = () => CallAPI("users", "get", null);
