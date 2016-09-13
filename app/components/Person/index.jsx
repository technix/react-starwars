import React, { Component } from 'react';

import store from '../../redux/store';
import { connect } from 'react-redux';

import Movie from '../Movie';


function mapStateToProps(store){
    return {
        id: store.person.id,
        data: store.person.data
    }
}

class Person extends Component {        
    render(){        
        return <div className="panel panel-primary">
            <NavPanel id={this.props.id} name={this.props.data.name} />
            <div className="panel-body">
                <table className="table table-bordered">
                    <tbody>
                        <PersonDatarow data={this.props.data.birth_year}>Birth Year</PersonDatarow>
                        <PersonDatarow data={this.props.data.gender}>Gender</PersonDatarow>
                        <PersonDatarow data={this.props.data.height}>Height</PersonDatarow>
                        <PersonDatarow data={this.props.data.mass}>Mass</PersonDatarow>
                        <PersonDatarow data={this.props.data.hair_color}>Hair Color</PersonDatarow>
                        <PersonDatarow data={this.props.data.skin_color}>Skin Color</PersonDatarow>
                        <PersonDatarow data={this.props.data.eye_color}>Eye Color</PersonDatarow>
                        <MovieList movies={this.props.data.films} />
                    </tbody>
                </table>
            </div>
        </div>;
    }
}

export default connect(mapStateToProps)(Person);


/* helper components */

class NavPanel extends Component {
    render() {
        return <div className="panel-heading" style={{height: '100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
                <NavButton id={this.props.id} incr="-1" />   
            </div>
            <div>
                <h1>{this.props.name}</h1>
            </div>
            <div>
                <NavButton id={this.props.id} incr="1" />                                
            </div>
        </div>;
    }
}


class NavButton extends Component {
    render() {
        var nextId = (+this.props.id) + (+this.props.incr);
        var direction = this.props.incr > 0 ? 'glyphicon glyphicon-menu-right' : 'glyphicon glyphicon-menu-left';
        if (nextId > 0) {
            return <a href={"/#/persons/" + nextId} className="btn btn-primary btn-lg"><span className={direction} aria-hidden="true"></span></a>
        }
        return <div style={{width:'28px'}} />;
    }
}


class PersonDatarow extends Component {        
    render(){
        return <tr>
            <th>{this.props.children}</th>
            <td>{this.props.data}</td>
       </tr>;
    };
};


class MovieList extends Component {        
    render(){
        return <tr>
            <th>Films</th>
            <td>
                <ul className="list-unstyled">
                    {this.props.movies.map( function(url, id) {
                        return <Movie key={url} url={url}/>;
                    })}
                </ul>
            </td>
        </tr>;
    };
};
