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
            if (response && response.token) {
                const user: any = {};
                if (user.token && user.accessToken) {
                    localStorage.setItem('token', user.token);
                    const dt = String(new Date().getTime() + 1000 * 36000);
                    localStorage.setItem('expires', dt);
                }
                return of(fetchLoginAsync.success(response));
            }
            return of(fetchLoginAsync.failure(response));
        }),

        catchError(error => {
            return of(fetchLoginAsync.failure(error));
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
        mergeMap(action => mapLobig(action, dependency)),
    );

export { fetchLoginEpic, fetchLoginAsync, resetReduxStore };
