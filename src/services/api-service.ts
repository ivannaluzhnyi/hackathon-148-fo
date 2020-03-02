import { throwError, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

import Config from '../utils/config';

const apiRequest = <T>({
    path,
    method,
    body,
    isSubscription,
    requestIsArray,
}: any): Observable<T> => {
    const modifiedBody = !requestIsArray
        ? {
              ...body,
          }
        : body;

    const settings = {
        method,
        url: `${Config.URL}${path}`,
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        body: modifiedBody,
        // crossDomain: false,
        // withCredentials: true,
    } as any;

    console.log(`FO Data: POST ${path} ====> `, modifiedBody);

    const token = localStorage.getItem('token');
    if (token && path !== '/login') {
        const Authorization = 'Authorization';
        settings.headers[Authorization] = `Bearer ${token}`;
    }
    if (isSubscription) {
        settings.headers['x-api-key'] = Config.ApiKey;
    }

    return ajax(settings).pipe(
        catchError(({ message, status, response }) => {
            console.log(`Error from API ${path} ====> `, message);
            return throwError(message);
        }),
        map(({ response }) => {
            console.log(`BO Response: POST ${path} ====> `, response);
            return response;
        }),
    );
};

export const fetchApiRequestBlob = async (
    bodyRequest: any,
    path: string,
    configPath?: string,
): Promise<Blob | undefined> => {
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyRequest),
    } as any;

    const token = localStorage.getItem('token');
    if (token) {
        const Authorization = 'Authorization';
        settings.headers[Authorization] = `Bearer ${token}`;
    }

    console.log(`FO Data: POST ${path} ====> `, bodyRequest);
    try {
        const response = await fetch(
            `${configPath ? configPath : Config.URL}${path}`,
            settings,
        );
        console.log(`BO Response: POST ${path} ====> `, response);
        return response.blob();
    } catch (err) {
        console.log(`Error from ${path} (fetch) =>`, err);
        return undefined;
    }
};

export default apiRequest;
