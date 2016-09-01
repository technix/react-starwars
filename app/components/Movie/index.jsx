import React, { Component } from 'react';
import 'whatwg-fetch';

export default class Movie extends Component {
    constructor(){
        super();
        
        this.state = {
            title: '...'
        };
    }

    componentDidMount() {
        var self = this;
        fetch(this.props.url)
            .then( function(response) {
                return response.json();
            }).then( function(json) {
                self.setState({title:json.title});
            });
    }

    render(){
        return <li>{this.state.title}</li>;
    }
}
