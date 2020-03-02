/// <reference types="react-scripts" />

import { StateType } from 'typesafe-actions';
import { RouterAction, LocationChangeAction } from 'react-router-redux';

// import { AuthAction } from '_actions/auth.actions';
// import { CustomersAction } from 'src/_actions/customer.actions';

type ReactRouterAction = RouterAction | LocationChangeAction;

declare module 'Types' {
    export type Store = StateType<typeof import('./index').default>;
    export type RootState = StateType<typeof import('./root-reducer').default>;
    export type RootAction = ReactRouterAction;
}
