import React from 'react';
import './App.css';



import AppRouter from './router/AppRouter';

import HomePage from './page/HomePage';
 import Login from './page/Login';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from "react-router-dom";


import configureStore from './redux/configureStore';
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <AppRouter/> 
    </Provider>
   
  );
}

export default App;
