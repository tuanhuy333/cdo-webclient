import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

import Signup from "../page/auth/Signup";
import HomePage from "./../page/HomePage";
import AboutPage from "./../page/AboutPage";
import PrivateRoute from "../router/PrivateRoute";
import PublicRoute from "../router/PublicRoute";
import Login from "../page/auth/Login";
import ListEmployees from "../page/employee/ListEmployees";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" component={Login} exact={true} />
        <PublicRoute path="/signup" component={Signup} exact={true} />

        <PrivateRoute path="/home" component={HomePage} exact={true} />
        <PrivateRoute path="/aboutPage" component={AboutPage} exact={true} />
        <PrivateRoute
          path="/list-employees"
          component={ListEmployees}
          exact={true}
        />

        <Route path="*" render={() => <div>404 Error</div>} />
      </Switch>
    </Router>
  );
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
