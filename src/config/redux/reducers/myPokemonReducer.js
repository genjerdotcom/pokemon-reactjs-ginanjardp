import { 
    MY_POKEMON_LIST,
    CATH_POKEMON
} from '../type';

const initialState = {
    myPokemonList:{
        data: [],
        page: {
            currentPage: 1,
            totalPage: 1
        }
    },
    catchPokemon:{
        data:{}
    }
}

const myPokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case MY_POKEMON_LIST:
            return {
                ...state,
                myPokemonList: {
                    data: action.payload.data,
                    page: action.payload.page
                }
            }
        case CATH_POKEMON:
            return {
                ...state,
                catchPokemon: {
                    data: action.payload.data
                }
            }
        default:
            return state;
    }
}

export default myPokemonReducer