
import Axios from 'axios';
import { 
    MY_POKEMON_LIST,
    CATH_POKEMON
} from '../type';


const getMyPokemonList = (page) => (dispatch) => {
    let limit = 8;
    Axios.get(`${window.env.JSON_SERVER}/owned_pokemon?_page=${page}&_limit=${limit}`)
    .then((response) => {
        const results = response.data;
        dispatch({
            type: MY_POKEMON_LIST, 
            payload: {
                data: results,
                page: {
                    currentPage: page, 
                    totalPage: Math.ceil(response.headers['x-total-count'] / limit)
                }
            }
        })
    })
    .catch((error)=>{
        console.log('error',error)
    })
}

const saveMyPokemon = (data) => async (dispatch) => {
    const getData = await Axios.get(`${window.env.JSON_SERVER}/owned_pokemon?name=${data.name}`)
    if (getData.data.length > 0) {
        return {
            type: CATH_POKEMON, 
            payload: null,
            message: 'Please type different name'
        }
    }else{
        await Axios.post(`${window.env.JSON_SERVER}/owned_pokemon`, data)
        dispatch({
            type: CATH_POKEMON, 
            payload: { data },
            message: 'Pokemon is mine now!'
        })
    }
    
}

const removeMyPokemon = (id) => (dispatch) => {
    return Axios.delete(`${window.env.JSON_SERVER}/owned_pokemon/${id}`)
    .then(function (response) {
        return response
    })
    .catch(function (error) {
        console.log(error);
    });
}

export {
    getMyPokemonList,
    saveMyPokemon,
    removeMyPokemon
}