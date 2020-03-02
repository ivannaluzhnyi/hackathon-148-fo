import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './router/routes';
import PrivateRoute from './router/PrivateRoute';

function App() {
    return (
        <Router>
            <Switch>
                {routes.map(({ isPrivateRoute, ...props }, idx) =>
                    isPrivateRoute ? (
                        <PrivateRoute key={idx} {...props} />
                    ) : (
                        <Route
                            key={idx}
                            path={props.path}
                            component={props.component}
                            exact={props.exact}
                        />
                    ),
                )}
            </Switch>
        </Router>
    );
}

export default App;
