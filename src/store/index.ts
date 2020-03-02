import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { RootAction, RootState, Services } from 'Types';
import rootEpic from './root-epic';
import rootReducer from './root-reducer';
import services from '../services';
import { getType } from 'typesafe-actions';
import { resetReduxStore } from '../actions/auth.actions';

const epicMiddleware = createEpicMiddleware<
    RootAction,
    RootAction,
    RootState,
    Services
>({
    dependencies: services,
});

const composeEnhancers =
    (process.env.NODE_ENV !== 'production' &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const prepareToStore = (str: RootState) => {
    return {
        ...str,

        settingReducer: {
            ...str.settingReducer,
            error: undefined,
        },
    };
};

const currentState = localStorage.getItem('reduxState');
const persistedState = currentState
    ? prepareToStore(JSON.parse(currentState))
    : {};
// const initialState = {};

const middlewares = [epicMiddleware];

const reducer = (state: any, action: RootAction) => {
    if (action.type === getType(resetReduxStore)) {
        delete state.authReducer;
        delete state.settingReducer;
    }
    return rootReducer(state, action);
};

const store = createStore(
    reducer,
    persistedState,
    // initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
);

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

epicMiddleware.run(rootEpic);

export default store;
