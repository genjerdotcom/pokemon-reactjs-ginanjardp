import { 
    GET_POKEMON_LIST, 
    GET_POKEMON_DETAIL,
    MY_POKEMON_LIST
} from '../type';

const initialState = {
    pokemonDetail: {
        data: {}
    },
    pokemonLists: {
        data: [],
        page: {
            currentPage: 1,
            totalPage: 1
        }
    },
    myPokemonList:{
        data: []
    }
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON_LIST:
            return {
                ...state,
                pokemonLists: {
                    data: action.payload.data,
                    page: action.payload.page
                }
            }
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: {
                    data: action.payload.data
                }
            }
        case MY_POKEMON_LIST:
            return {
                ...state,
                myPokemonList: {
                    data: action.payload.data
                }
            }
        default:
            return state;
    }
}

export default pokemonReducer