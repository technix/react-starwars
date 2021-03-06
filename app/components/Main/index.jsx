import React, { Component } from 'react';
import Person from '../Person';

import store from '../../redux/store';
import { requestPerson } from '../../redux/actions';

export default class Application extends Component {

    componentDidMount(){
        store.dispatch(requestPerson(this.props.params.id || 1));
    }
    
    componentWillReceiveProps(updatedProps) {
        store.dispatch(requestPerson(+updatedProps.params.id));
    }
    
    render(){
        return <div className="component container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <Person/>
                </div>
            </div>
        </div>;
    }
};

