import { Reducer } from 'redux';
import { getType } from 'typesafe-actions';

import * as actions from '../actions/auth.actions';

export type SettingsState = Readonly<{
    loading: boolean;
    error: any;
}>;

const initialState: SettingsState = {
    loading: false,
    error: undefined,
};

type Actions = actions.AuthAction;

const settingReducer: Reducer<SettingsState, Actions> = (
    state = initialState,
    action: Actions,
) => {
    switch (action.type) {
        case getType(actions.fetchLoginAsync.request): {
            return {
                ...state,
                loading: true,
            };
        }

        case getType(actions.fetchLoginAsync.failure): {
            return {
                ...state,
                loading: false,
            };
        }

        case getType(actions.fetchLoginAsync.success): {
            return {
                ...state,
                loading: false,
            };
        }

        default:
            return state;
    }
};

export default settingReducer;
