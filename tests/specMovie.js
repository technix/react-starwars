import { expect } from 'chai';
import React from 'react';
import { mount, shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import { Provider } from 'react-redux';
import store from '../app/redux/store';

import Movie from '../app/components/Movie';

fetchMock.mock(
    'http://swapi.co/api/films/1/', 
    {
        'title': 'A New Hope',
        'episode_id': 4
    }
);


describe('Movie Component', () => {
    
    describe('Movie fetch', () => {
        var wrapper;
        
        before(function() {
            wrapper = mount(<Provider store={store}><Movie url='http://swapi.co/api/films/1/' /></Provider>);
            setTimeout(function () {
                done();
            }, 500);
        });
        
        it('fetches movie title correctly', (done) => {            
            expect(wrapper.update().text()).to.be.equal('A New Hope');
            done();
        });
    });
    
});