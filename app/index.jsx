import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import Application from './components/Main';

import Bootstrap from './../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/(persons/:id)" component={Application} />
    </Router>
), document.getElementById('app'));

