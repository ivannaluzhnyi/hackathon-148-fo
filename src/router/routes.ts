import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

export interface RouteProps {
    component: React.ComponentType;
    path: string;
    exact?: boolean;
    title?: string;
    isPrivateRoute?: boolean;
}

export default [
    {
        path: '/',
        component: Home,
        exact: true,
    },

    {
        path: '/login',
        component: Login,
    },

    {
        path: '/admin',
        component: Home,
        isPrivateRoute: true,
    },
    {
        path: '*',
        component: NotFound,
    },
];
