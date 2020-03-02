import React from 'react';
import {
    RouteProps,
    RouteComponentProps,
    Route,
    Redirect,
} from 'react-router-dom';
import AuthService from '../services/auth-service';

interface PrivateRouteProps extends RouteProps {
    component:
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
    component: Component,
    ...rest
}) => {
    const isSignIn = AuthService.isAuthenticated();
    return (
        <Route
            {...rest}
            render={props =>
                isSignIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
