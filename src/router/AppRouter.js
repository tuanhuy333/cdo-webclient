import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

import Signup from "../page/auth/Signup";
import ListEmployees from "../page/employee/ListEmployees";

import HomePage from './../page/HomePage';
import AboutPage from './../page/AboutPage';
import PrivateRoute from '../router/PrivateRoute';
import PublicRoute from '../router/PublicRoute';



export default function AppRouter() {
    return (
        <Router>
            <Switch>
                
            
               
                <PublicRoute path="/login" component={Login}  exact={true}/>
                
                <PrivateRoute path="/home" component={HomePage} exact={true}/>
                <PrivateRoute path="/aboutPage" component={AboutPage} exact={true} />
                

                <Route path="*" render={() => <div>404 Error</div>} />

            </Switch>
        </Router>
    )
}

//         <Route path="/list-employee">
//           <ListEmployees />
//         </Route>
//         <Route path="/">
//           <Signup />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }
