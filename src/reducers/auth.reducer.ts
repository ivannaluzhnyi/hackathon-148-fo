import { Reducer } from 'redux';
import { getType } from 'typesafe-actions';

import * as actions from '../actions/auth.actions';

export type AuthState = Readonly<{
    error?: string;
    token?: string;
    userId?: string;
}>;

const initialState: AuthState = {
    error: undefined,
    token: undefined,
    userId: undefined,
};

type Actions = actions.AuthAction;

const authReducer: Reducer<AuthState, Actions> = (
    state = initialState,
    action: Actions,
) => {
    switch (action.type) {
        case getType(actions.fetchLoginAsync.request): {
            return {
                ...state,
                error: undefined,
            };
        }

        case getType(actions.fetchLoginAsync.failure): {
            return {
                ...state,
                error: action.payload.error,
            };
        }

        case getType(actions.fetchLoginAsync.success): {
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
            };
        }

        default:
            return state;
    }
};

export default authReducer;
