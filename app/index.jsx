import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import { Provider } from 'react-redux';
import store from './redux/store';

import Application from './components/Main';

import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/(persons/:id)" component={Application} />
        </Router>
    </Provider>
), document.getElementById('app'));

