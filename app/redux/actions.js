export const REQUEST_PERSON = 'request-person';
export const REQUEST_MOVIE = 'request-movie';
export const DATA_PERSON = 'data-person';
export const DATA_MOVIE = 'data-movie';

import 'whatwg-fetch';


export function requestPerson(id){    
    return (dispatch) => {
        return fetch('http://swapi.co/api/people/' + id + '/')
            .then( function(response) {
                return response.json();
            }).then( function(json) {
                dispatch(dataPerson(id, json));
            });
    };
    
}

export function dataPerson(id, data){
    return {
        type: DATA_PERSON,
        id: id,
        data: data
    };
}


export function requestMovie(url){
    return (dispatch) => {
        return fetch(url)
            .then( function(response) {
                return response.json();
            }).then( function(json) {
                dispatch(dataMovie(url, json));
            });
    };
}


export function dataMovie(url, data){
    var r = {
        type: DATA_MOVIE
    };
    r[url] = data.title;
    return r;
}