// import '@/scss/reset.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import '@babel/polyfill';
import configureStore from '@/redux';
const store = configureStore();
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);