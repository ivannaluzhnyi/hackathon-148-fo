/**
 * @author [Ivan Naluzhnyi]
 * @email [ivan.nalzuhnyi@gmail.com]
 * @create date 2020-03-02 14:36:27
 * @modify date 2020-03-05 19:11:26
    * @desc [Hackthon project for 148 company ]
 */

import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { routes, privateRoutes } from './router/routes';
import PrivateRoute from './router/PrivateRoute';
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
                <GlobalStyles />
                <Switch>
                    {PrivateContent()}
                    {PublicContent()}
                </Switch>
            </Router>
        </>
    );
}

export default App;
