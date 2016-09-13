import React, { Component } from 'react';
import store from '../../redux/store';
import { requestMovie } from '../../redux/actions';
import { connect } from 'react-redux';


function mapStateToProps(store, props){
    return {
        title: store.movie[props.url]
    }
}

class Movie extends Component {
    componentDidMount(){
        store.dispatch(requestMovie(this.props.url));
    }
    
    render(){
        return <li>{this.props.title}</li>;
    }
}

export default connect(mapStateToProps)(Movie);