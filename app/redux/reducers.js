import { combineReducers } from 'redux';
import { DATA_PERSON, DATA_MOVIE } from './actions';

const initialPersonState = {
    
    data: {
        films: []
    }
};

const initialMovieState = {};


function personReducer(state = initialPersonState, action) {
    if (action.type === DATA_PERSON){
        return Object.assign({}, state, {
            id: action.id,
            data: action.data
        });
    }
    return state;
};

function movieReducer(state = initialMovieState, action) {
    if (action.type === DATA_MOVIE){
        return Object.assign({}, state, action);
    }
    return state;
};

export default combineReducers({
    person: personReducer,
    movie: movieReducer
});