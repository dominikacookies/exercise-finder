import { Route, Switch } from "react-router-dom";
import Exercises from "./pages/Exercises/";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/exercises/:type">
        <Exercises />
      </Route>
    </Switch>
  );
};

export default Routes;
