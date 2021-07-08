import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from "react-router-dom";
import HomePage from '../page/HomePage';
import Login from '../page/Login';

import { useSelector } from 'react-redux'

const AuthRoute = props => {
  //const { isAuthUser, type } = props;
  const isAuthUser = useSelector(state => state.LoginReducer.isAuthUser)

  return (
    <Router>
      <Switch>
        <Route path='/home' render={() => {
          return (isAuthUser && localStorage.getItem("user")) ? <HomePage /> : <Redirect to='/' />
        }}/>

        {/*
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
          <Login />
        </Route>
      </Switch>
    </Router>
  )

};



export default React.memo(AuthRoute);