import React from "react";
import "./App.scss";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "./pages/auth/login.page";
import GuardedRoute from "./guards/route.guard";
import ListUsersPage from "./pages/users/list/list-users.page";
import { getIsAutenticatedSelector } from "./store/auth/selectors";
import DetailUsersPage from "./pages/users/detail/detail-users.page";

function App() {
  const isAutenticated = useSelector(getIsAutenticatedSelector);

  const isEnabled = (): boolean => {
    return isAutenticated && sessionStorage.getItem("token") !== null;
  };

  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <GuardedRoute
          path="/list-users"
          component={ListUsersPage}
          auth={isEnabled()}
        />
        <GuardedRoute
          path="/detail-users/:id"
          component={DetailUsersPage}
          auth={isEnabled()}
        />
        <Redirect to="/login"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
