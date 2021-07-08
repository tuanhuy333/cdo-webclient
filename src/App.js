import React from 'react';
import './App.css';
import AppRouter from './router/AppRouter';

import AuthRoute from './router/AuthRoute';

import HomePage from './page/HomePage';
import Login from './page/Login';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from "react-router-dom";


import configureStore from './redux/configureStore';
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
     <AuthRoute/>
    </Provider>
  );
}

export default App;
