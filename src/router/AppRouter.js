import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

import Signup from "../page/auth/Signup";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        {/* <Route path='/home' render={() => {
                    return localStorage.getItem("accessToken") ? <WelcomePage /> : <Redirect to='/' />
                }}>

                </Route>
                <Route path="/updateInfo">
                    <UpdateInformation />
                </Route>
                <Route path="/employeeList">
                    <EmployeeListPage />
                </Route>
                <Route path="/image">
                    <EditAvatar parentCallback={null} />
                </Route>
                <Route path="/employeeList1">
                    <EmployeeList />
                </Route> */}
        <Route path="/">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}
