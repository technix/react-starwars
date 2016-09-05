import { expect } from 'chai';
import React from 'react';
import { mount, shallow } from 'enzyme';
import fetchMock from 'fetch-mock';

import Movie from '../app/components/Movie';

fetchMock.mock(
    'http://swapi.co/api/films/1/', 
    {
        'title': 'A New Hope',
        'episode_id': 4
    }
);


describe('Movie Component', () => {
    
    it('initialized with correct text', () => {
        const wrapper = shallow(<Movie />);
        expect(wrapper.text()).to.be.equal('...');
    });

    it('renders title according to state', () => {
        const wrapper = shallow(<Movie />);
        wrapper.setState({title: 'Empire Strikes Back'});
        expect(wrapper.text()).to.be.equal('Empire Strikes Back');
    });
    
    describe('Movie fetch', () => {
        var wrapper;
        
        before(function() {
            wrapper = mount(<Movie url='http://swapi.co/api/films/1/' />);
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