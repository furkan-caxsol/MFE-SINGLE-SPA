// import HigherOrderLayout from "./Templates/Main/Main";
// import Routes from "./Routes/Routes";

// export default function Root(props) {
//   return ;
// }

import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Root(props) {
  const { routes } = props;

  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={route.component}
            />
          ))}
        </Suspense>
      </Switch>
    </Router>
  );
}
