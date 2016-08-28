import React, { Component } from 'react';
import 'whatwg-fetch';

import Movie from '../Movie';

export default class Application extends Component {
    constructor(){
        super();

        this.state = {
            id: 1,
            data: {
                film_titles: []
            }
        };
    }

    load_data(){
        var person_data = {};
        var self = this;

        fetch('http://swapi.co/api/people/' + this.state.id + '/')
            .then( function(response) {
                return response.json();
            }).then( function(json) {
                var film_titles = [];
                var loaders = [];

                person_data = json;

                // load data for all films
                var films = person_data.films;
                
                for (var i=0; i < films.length; i++) {
                    loaders.push(
                        fetch(films[i])
                            .then( function(response) {
                                return response.json();
                            }).then( function(json) {
                                film_titles.push(json.title);
                            })
                    );
                }
        
                Promise.all(loaders).then(function() {
                    person_data.film_titles = film_titles;
                    self.setState({data: person_data});
                });
            });
    }

    componentDidMount(){
        this.load_data();
    }

    render(){
        return <div className="component container">
            <div className="row">
                <div className="col-xs-1">Previous</div>
                <div className="col-xs-3">
                    <h1>{this.state.data.name}</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>Height</td>
                                <td>{this.state.data.height}</td>
                            </tr>
                            <tr>
                                <td>Mass</td>
                                <td>{this.state.data.mass}</td>
                            </tr>
                            <tr>
                                <td>Hair color</td>
                                <td>{this.state.data.hair_color}</td>
                            </tr>
                            <tr>
                                <td>Skin color</td>
                                <td>{this.state.data.skin_color}</td>
                            </tr>
                            <tr>
                                <td>Films</td>
                                <td>
                                    <ul>
                                        {this.state.data.film_titles.map( function(result, id) {
                                            return <Movie key={id} title={result}/>;
                                        })}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-xs-1">Next</div>
            </div>
        </div>;
    }
}
