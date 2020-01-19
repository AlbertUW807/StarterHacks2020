import React from "react";
import { Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Home from "./components/Home";
import Description from "./components/Description";

export function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="/movie/:imdbID" render={() => <Description/>} />
      </Switch>
    </div>
  );
}
