import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.sass';

import App from './components/App/App';

import initState from './redux/initState';
import redd from './redux/red';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

let market = createStore ( redd, initState );

ReactDOM.render(
    <Provider store = { market } >
        <App />
    </Provider>
    , document.getElementById('root'));


