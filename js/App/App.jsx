import {Provider} from 'react-redux';
import React,{Component} from 'react';
import {render} from 'react-dom';
import configStore from './store/store.jsx';
import App from './container/App.jsx';
var $ = window.$ = window.jQuery = require('jquery'),
    bootstrap = require('bootstrap')
const store = configStore();
render(<Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("content")
);