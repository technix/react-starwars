import { expect } from 'chai';
import React from 'react';
import { mount, shallow } from 'enzyme';
import fetchMock from 'fetch-mock';

import { Provider } from 'react-redux';
import store from '../app/redux/store';

import Person from '../app/components/Person';
import { requestPerson } from '../app/redux/actions';

var testData = {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "Blond",
    "skin_color": "Caucasian",
    "eye_color": "Blue",
    "birth_year": "19 BBY",
    "gender": "Male",
    "films": [
          "http://swapi.co/api/films/1/",
          "http://swapi.co/api/films/2/",
          "http://swapi.co/api/films/3/"
    ]
};

var titles = ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];

fetchMock
    .mock( 'http://swapi.co/api/people/1/', testData )
    .mock( 'http://swapi.co/api/films/1/', { title: titles[0]})
    .mock( 'http://swapi.co/api/films/2/', { title: titles[1]})
    .mock( 'http://swapi.co/api/films/3/', { title: titles[2]});


var table_columns = ['Birth year', 'Gender', 'Height', 'Mass', 'Hair color', 'Skin color', 'Eye color', 'Films'];

var expected_data = [
    testData.birth_year,
    testData.gender,
    testData.height,
    testData.mass,
    testData.hair_color,
    testData.skin_color,
    testData.eye_color
];

var filmsId = 7; // number of table cell with films list


describe('Main Component', () => {
    
    it('initialized with correct text', () => {
        const wrapper = shallow(<Provider store={store}><Person /></Provider>);
        wrapper.find('table tbody tr th').forEach(function(node, id){
            if (id !== filmsId) {
                expect(node.text()).to.be.equal( table_columns[id] );    
            } // do not test movies now
        });
    });    

    describe('Person fetch', () => {
        var wrapper;
        
        // FIXME: is there a better way to test async operations?
        before(function() {
            wrapper = mount(<Provider store={store}><Person /></Provider>);
            store.dispatch(requestPerson(1));
            setTimeout(function () {
                done();
            }, 500);
        });
        
        it('fetches person data correctly', (done) => {            
            wrapper.find('table tbody tr td').forEach(function(node, id) {
                if (id == filmsId) {
                    node.find('li').forEach(function(node, id){
                        expect(node.text()).to.be.equal( titles[id]);        
                    });
                }
                else {
                    expect(node.text()).to.be.equal( expected_data[id] );
                }
            });
            
            done();
        }); // fetch test
        
    }); // Person fetch test block
    
});