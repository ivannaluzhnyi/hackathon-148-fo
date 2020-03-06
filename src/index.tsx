/**
 * @author [Ivan Naluzhnyi]
 * @email [ivan.nalzuhnyi@gmail.com]
 * @create date 2020-03-02 14:36:27
 * @modify date 2020-03-05 19:11:26
 * @desc [Hackthon project for 148 company ]
 */

import React from 'react';
import { render } from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import {
    StylesProvider,
    createMuiTheme,
    MuiThemeProvider,
} from '@material-ui/core';

import './index.css';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Open Sans, Arial',
    },

    palette: {
        primary: {
            main: '#030F4B',
        },
        secondary: {
            main: '#FCC443',
        },
    },
});
render(
    <Provider store={store}>
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
            {/* <GlobalStyles /> */}
        </StylesProvider>
    </Provider>,

    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
