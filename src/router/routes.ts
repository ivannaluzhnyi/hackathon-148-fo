import React from 'react';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import { Login, Register } from '../pages/auth';

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
        path: '/register',
        component: Register,
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
