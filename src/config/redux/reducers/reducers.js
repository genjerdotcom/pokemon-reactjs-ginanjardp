import {combineReducers} from 'redux';
import globalReducer from './globalReducer';
import pokemonReducer from './pokemonReducer';
import myPokemonReducer from './myPokemonReducer';

const reducer = combineReducers({
    pokemonReducer, 
    myPokemonReducer,
    globalReducer
});

export default reducer;