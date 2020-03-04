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
import GlobalStyles from './fonts/fonts';

console.log('GlobalStyles => ', GlobalStyles);
console.log('GlobalStyles> => ', <GlobalStyles />);

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Open Sans, Arial',
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
