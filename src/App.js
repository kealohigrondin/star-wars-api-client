import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Breadcrumbs from "./components/Breadcrumbs";
import routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="ui container">
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                key={route.name}
                exact
                component={(props) => {
                  const crumbs = routes
                    // Get all routes that contain the current one.
                    .filter(({ path }) => props.match.path.includes(path))
                    // Swap out any dynamic routes with their param values.
                    // E.g. "/pizza/:pizzaId" will become "/pizza/1"
                    .map(({ path, ...rest }) => ({
                      path: Object.keys(props.match.params).length
                        ? Object.keys(props.match.params).reduce(
                            (path, param) =>
                              path.replace(
                                `:${param}`,
                                props.match.params[param]
                              ),
                            path
                          )
                        : path,
                      ...rest,
                    }));

                  //gets rid of '/' route from the breadcrumb by shifting the whole array left 1 index (thus removing crumbs[0])
                  crumbs.shift();

                  return (
                    <div className="p-8">
                      <Breadcrumbs crumbs={crumbs} />
                      <route.Component {...props} />
                    </div>
                  );
                }}
              />
            );
          })}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
