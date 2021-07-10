import React from 'react';
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
} from "react-router-dom";
import Login from "../page/Login";



const HomePage = () => {

        return (
                <>
                        <h1>HomePage</h1>
                        <Router>
                                <ul>
                                        <li>
                                                <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                                <Link to="/login">login</Link>
                                        </li>
                                        <li>
                                                <Link to="/dashboard">Dashboard</Link>
                                        </li>
                                </ul>
                                <Switch>
                                        <Route exact path="/">
                                                <Home />
                                        </Route>
                                        <Route path="/login">
                                                <Login />
                                        </Route>
                                        <Route path="/dashboard">
                                                <Dashboard />
                                        </Route>
                                </Switch>
                        </Router>
                </>
        )
}

function Home() {
        return (
          <div>
            <h2>Home</h2>
          </div>
        );
      }
      
      function About() {
        return (
          <div>
            <h2>About</h2>
          </div>
        );
      }
      
      function Dashboard() {
        return (
          <div>
            <h2>Dashboard</h2>
          </div>
        );
      }
export default HomePage

