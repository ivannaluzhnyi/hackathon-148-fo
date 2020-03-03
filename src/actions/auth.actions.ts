import { Epic } from 'redux-observable';
import { of, forkJoin } from 'rxjs';
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
import { LoginProps } from '../pages/auth/Login';

const fetchLoginAsync = createAsyncAction(
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE,
)<LoginProps, any, any>();

const resetReduxStore = createAction(REDUX_RESET_STATE)();

export type AuthAction =
    | ActionType<typeof fetchLoginAsync>
    | ActionType<typeof resetReduxStore>;

const preparePayloadLogin = ({ email, password }: LoginProps) => {
    return {
        email,
        password,
    };
};

const mapLobig = (action: RootAction, { apiRequest }: Services) => {
    const payload = preparePayloadLogin(action.payload);
    return apiRequest<any>({
        path: '/login',
        method: 'post',
        body: payload,
    }).pipe(
        mergeMap((response: any) => {
            console.log('reqsppnse login => ', response);
            if (response && response.token) {
                const user: any = {};
                if (user.token && user.accessToken) {
                    localStorage.setItem('token', user.token);
                    localStorage.setItem('accessToken', user.accessToken);
                    const dt = String(new Date().getTime() + 1000 * 36000);
                    localStorage.setItem('expires', dt);
                }

                return of(user);
            }
            const message = response.message || 'Une erreur est survenue';
            return of({ error: message });
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
            (action: RootAction) => mapLobig(action, dependency),
            (action: RootAction, r: any) => [action, r],
        ),

        switchMap(([action, loginResponse]) => {
            return forkJoin(of(loginResponse), of({}));
        }),

        switchMap(([loginResponse, contextResponse]) => {
            return of(
                fetchLoginAsync.failure({
                    error: '',
                }),
            );
        }),
        catchError(error => {
            return of(
                fetchLoginAsync.failure({
                    error: error.message,
                }),
            );
        }),
    );

export { fetchLoginEpic, fetchLoginAsync, resetReduxStore };
