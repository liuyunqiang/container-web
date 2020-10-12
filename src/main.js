// import '@/scss/reset.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
// import configureStore from '@/store';
import '@babel/polyfill';
// const store = configureStore();
render(
    <Provider >
        <App />
    </Provider>,
    document.getElementById("app")
);