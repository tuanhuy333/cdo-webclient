import React, { Suspense } from "react";
// import "./App.css";
// import "../node_modules/antd/dist/antd.css";
// import "./i18n";

// import AppRouter from "./router/AppRouter";
// function App() {
//   return (
//     <Suspense fallback="loading">
//       <div className="App">
//         <AppRouter />
//       </div>
//     </Suspense>

import "./App.css";

import AppRouter from "./router/AppRouter";

import HomePage from "./page/HomePage";
import Login from "./page/auth/Login";

import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

import configureStore from "./redux/configureStore";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback="loading">
        <AppRouter />
      </Suspense>
    </Provider>
  );
}

export default App;
