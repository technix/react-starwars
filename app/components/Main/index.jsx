import React, { Component } from 'react';
import 'whatwg-fetch';

import Movie from '../Movie';

export default class Application extends Component {
    constructor(){
        super();

        this.state = {
            id: 1,
            data: {
                films: []
            }
        };
        this.loadNext = this.loadNext.bind(this);
        this.loadPrevious = this.loadPrevious.bind(this);
    }

    load_data(){
        var self = this;
        fetch('http://swapi.co/api/people/' + this.state.id + '/')
            .then( function(response) {
                return response.json();
            }).then( function(json) {
                self.setState({data: json});
            });
    }

    loadPrevious(e) {
        var new_id = this.state.id - 1;
        if (new_id >= 1) {
            this.setState({id: new_id}, this.load_data);
        }
    }

    loadNext(e) {
        this.setState({id: this.state.id + 1}, this.load_data);
    }

    componentDidMount(){
        this.load_data();
    }

    componentWillReceiveProps(updatedProps) {
        this.setState({id: +updatedProps.params.id, data: {films:[]}}, this.load_data);
    }
    
    render(){
        var buttonPrevious = <div style={{width:'28px'}} />;
        if (this.state.id > 1) {
            buttonPrevious = <a href={"/#/persons/" + (this.state.id - 1)} className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span></a>;
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
                                <h1>{this.state.data.name}</h1>
                            </div>
                            <div>
                                <a href={"/#/persons/" + (this.state.id + 1)} className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a>
                            </div>
                        </div>
                        <div className="panel-body" >
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th>Birth year</th>
                                        <td>{this.state.data.birth_year}</td>
                                    </tr>
                                    <tr>
                                        <th>Gender</th>
                                        <td>{this.state.data.gender}</td>
                                    </tr>
                                    <tr>
                                        <th>Height</th>
                                        <td>{this.state.data.height}</td>
                                    </tr>
                                    <tr>
                                        <th>Mass</th>
                                        <td>{this.state.data.mass}</td>
                                    </tr>
                                    <tr>
                                        <th>Hair color</th>
                                        <td>{this.state.data.hair_color}</td>
                                    </tr>
                                    <tr>
                                        <th>Skin color</th>
                                        <td>{this.state.data.skin_color}</td>
                                    </tr>
                                    <tr>
                                        <th>Eye color</th>
                                        <td>{this.state.data.eye_color}</td>
                                    </tr>

                                    <tr>
                                        <th>Films</th>
                                        <td>
                                            <ul className="list-unstyled">
                                                {this.state.data.films.map( function(url, id) {
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
