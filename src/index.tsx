import React from 'react';
import { render } from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { StylesProvider } from '@material-ui/core';

import './index.css';
import GlobalStyles from './fonts/fonts';

render(
    <Provider store={store}>
        <StylesProvider injectFirst>
            <GlobalStyles />
            <App />
        </StylesProvider>
    </Provider>,

    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
