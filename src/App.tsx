import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { routes, privateRoutes } from './router/routes';
import PrivateRoute from './router/PrivateRoute';
import { Header } from './components';
import GlobalStyles from './fonts/fonts';

const PublicContent = () =>
    routes.map((props, idx) => (
        <Route
            key={idx}
            path={props.path}
            component={props.component}
            exact={props.exact}
        />
    ));

const PrivateContent = () =>
    privateRoutes.map((props, idx) => (
        <PrivateRoute key={idx} path={props.path} component={props.component} />
    ));

function App() {
    return (
        <>
            <Router>
                {/* {window.location.pathname !== '/' && <Header />} */}
                <GlobalStyles />
                <Switch>
                    {PrivateContent()}
                    {PublicContent()}
                </Switch>
                <footer>footer</footer>
            </Router>
        </>
    );
}

export default App;
