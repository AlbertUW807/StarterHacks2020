import React from "react";
import { Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Description from "./components/Description";

export function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="/movie/:imdbID/:Title" render={() => <Description/>} />
      </Switch>
    </div>
  );
}
