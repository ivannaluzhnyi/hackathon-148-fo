import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { mergeMap, catchError, filter } from 'rxjs/operators';
import { createAsyncAction, isActionOf, ActionType } from 'typesafe-actions';
import { RootAction, RootState, Services } from 'Types';

import {
    SEND_INSCRIPTION_REQUEST,
    SEND_INSCRIPTION_SUCCESS,
    SEND_INSCRIPTION_FAILURE,
} from './actionTypes';

const sendInscriptionAsync = createAsyncAction(
    SEND_INSCRIPTION_REQUEST,
    SEND_INSCRIPTION_SUCCESS,
    SEND_INSCRIPTION_FAILURE,
)<any, any, any>();

export type InscriptionAction = ActionType<typeof sendInscriptionAsync>;

const mapPostInscription = (action: RootAction, { apiRequest }: Services) => {
    const payload = action.payload;
    return apiRequest<any>({
        path: '/lol',
        method: 'post',
        body: payload,
    }).pipe(
        mergeMap((response: any) => {
            return of(sendInscriptionAsync.success(response));
        }),

        catchError(error => {
            return of(sendInscriptionAsync.failure(error));
        }),
    );
};
const inscriptionEpic: Epic<RootAction, RootAction, RootState, Services> = (
    action$,
    state$,
    dependency,
) =>
    action$.pipe(
        filter(isActionOf(sendInscriptionAsync.request)),
        mergeMap(action => mapPostInscription(action, dependency)),
    );

export { mapPostInscription, sendInscriptionAsync, inscriptionEpic };
