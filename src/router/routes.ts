import React from 'react';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import { Login, Register } from '../pages/auth';

import Survey from '../components/Inscription/Survey';

export interface RouteProps {
    component: React.ComponentType;
    path: string;
    exact?: boolean;
    title?: string;
    withoutHeade?: boolean;
    withouFooter?: boolean;
}

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },

    {
        path: '/login',
        component: Login,
        withoutHeade: true,
        withouFooter: true,
    },
    {
        path: '/inscription',
        component: Register,
    },
    {
        path: '/survey',
        component: Survey,
        withoutHeade: true,
        withouFooter: true,
    },

    {
        path: '*',
        component: NotFound,
    },
];

const privateRoutes = [
    {
        path: '/admin',
        component: Home,
    },
];

export { routes, privateRoutes };
