import { Reducer } from 'redux';
import { getType } from 'typesafe-actions';

import * as actions from '../actions/inscription.actions';

export type AuthState = Readonly<{}>;

const initialState: any = {
    sector: {
        value: '',
        categories: [],
    },
    profession: {
        expirience: undefined,
        typeUser: undefined,
        categories: [],
        skills: [],
    },
    moreInformation: {
        description: '',
        cv: '',
        portolio: '',
        validate_condition: false,
    },
    userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm_password: '',
    },
};

type Actions = actions.InscriptionAction;

const inscriptionReducer: Reducer<AuthState, Actions> = (
    state = initialState,
    action: Actions,
) => {
    switch (action.type) {
        case getType(actions.sendInscriptionAsync.request): {
            return {
                ...state,
                ...action.payload,
            };
        }

        case getType(actions.sendInscriptionAsync.failure): {
            return {
                ...state,
                ...action.payload.payload,
                error: action.payload.error,
            };
        }

        case getType(actions.sendInscriptionAsync.success): {
            return {
                ...state,
            };
        }

        default:
            return state;
    }
};

export default inscriptionReducer;
