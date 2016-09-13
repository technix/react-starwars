import React, { Component } from 'react';

import store from '../../redux/store';
import { requestPerson } from '../../redux/actions';
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
        var buttonPrevious = <div style={{width:'28px'}} />;
        if (this.props.id > 1) {
            buttonPrevious = <a href={"/#/persons/" + (this.props.id - 1)} className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span></a>;
        }
        
        return <div className="component container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="panel panel-primary">
                        <div className="panel-heading" style={{height: '100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div>
                                {buttonPrevious}
                            </div>
                            <div>
                                <h1>{this.props.data.name}</h1>
                            </div>
                            <div>
                                <a href={"/#/persons/" + (this.props.id + 1)} className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a>
                            </div>
                        </div>
                        <div className="panel-body" >
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th>Birth year</th>
                                        <td>{this.props.data.birth_year}</td>
                                    </tr>
                                    <tr>
                                        <th>Gender</th>
                                        <td>{this.props.data.gender}</td>
                                    </tr>
                                    <tr>
                                        <th>Height</th>
                                        <td>{this.props.data.height}</td>
                                    </tr>
                                    <tr>
                                        <th>Mass</th>
                                        <td>{this.props.data.mass}</td>
                                    </tr>
                                    <tr>
                                        <th>Hair color</th>
                                        <td>{this.props.data.hair_color}</td>
                                    </tr>
                                    <tr>
                                        <th>Skin color</th>
                                        <td>{this.props.data.skin_color}</td>
                                    </tr>
                                    <tr>
                                        <th>Eye color</th>
                                        <td>{this.props.data.eye_color}</td>
                                    </tr>

                                    <tr>
                                        <th>Films</th>
                                        <td>
                                            <ul className="list-unstyled">
                                                {this.props.data.films.map( function(url, id) {
                                                    return <Movie key={url} url={url}/>;
                                                })}
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default connect(mapStateToProps)(Person);
