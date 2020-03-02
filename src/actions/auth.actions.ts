import { Epic } from 'redux-observable';
import { of, throwError } from 'rxjs';
import { mergeMap, catchError, filter, switchMap } from 'rxjs/operators';
import {
    createAsyncAction,
    createAction,
    isActionOf,
    ActionType,
} from 'typesafe-actions';
import { RootAction, RootState, Services } from 'Types';

import {
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE,
    REDUX_RESET_STATE,
} from './actionTypes';

const fetchLoginAsync = createAsyncAction(
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE,
)<any, any, any>();

const resetReduxStore = createAction(REDUX_RESET_STATE)();

export type AuthAction =
    | ActionType<typeof fetchLoginAsync>
    | ActionType<typeof resetReduxStore>;

const preparePayloadLogin = ({ user, password }: any) => {
    return {
        user,
        password,
    };
};

const mapLogin = (action: RootAction, { apiRequest }: Services) => {
    const payload = preparePayloadLogin(action.payload);
    return apiRequest<any>({
        path: '/login',
        method: 'post',
        body: payload,
    }).pipe(
        mergeMap((response: any) => {
            if (response && response.token) {
                const user = {
                    userId: response.user,
                    token: response.token,
                    accessToken: response.accessToken,
                };
                if (user.token && user.accessToken) {
                    localStorage.setItem('token', user.token);
                    localStorage.setItem('accessToken', user.accessToken);
                }
                return of(user);
            }
            const message = response.message || 'Une erreur est survenue';
            return throwError({ message });
        }),
        catchError(error => {
            return of({ error: error.message });
        }),
    );
};

const fetchLoginEpic: Epic<RootAction, RootAction, RootState, Services> = (
    action$,
    state$,
    dependency,
) =>
    action$.pipe(
        filter(isActionOf(fetchLoginAsync.request)),
        switchMap(
            (action: RootAction) => mapLogin(action, dependency),
            (action: RootAction, r: any) => [action, r],
        ),
    );

export { fetchLoginEpic, fetchLoginAsync, resetReduxStore };
