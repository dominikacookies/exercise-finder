import { Route, Switch } from "react-router-dom";
import FemaleExercises from "./pages/Exercises/FemaleExercises";
import MaleExercises from "./pages/Exercises/MaleExercises";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/exercises/female">
        <FemaleExercises />
      </Route>
      <Route exact path="/exercises/male">
        <MaleExercises />
      </Route>
    </Switch>
  );
};

export default Routes;
