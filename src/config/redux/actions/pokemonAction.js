
import Axios from 'axios';
import { 
    GET_POKEMON_LIST, 
    GET_POKEMON_DETAIL
} from '../type';

const getPokemonList = (page) => (dispatch) => {
    let limit = 8
    Promise.all([
        Axios.get(`${window.env.POKEAPI_URL}/pokemon?limit=${limit}&offset=${(page - 1) + limit}`), 
        Axios.get(`${window.env.JSON_SERVER}/owned_pokemon`)
    ])
    .then((responses) => {
        let results = {
            data:[],
            count: responses[0].data.count
        }
        responses[0].data.results.map((row) => {
            let lastSegment = row.url.split("/");
            let _id = lastSegment[lastSegment.length-2];
            return results.data.push({
                id: _id,
                name: row.name,
                url: row.url,
                total: responses[1].data.filter(value => value._id_pokemon.toString() === _id).length
            })
        })
        return results;
    }).then((results) => {
        dispatch({
            type: GET_POKEMON_LIST, 
            payload: {
                data: results.data,
                page: {
                    currentPage: page, 
                    totalPage: Math.ceil(results.count / limit)
                }
            }
        })
    })
}

const getDetailPokemon = (id) => (dispatch) => {
    Axios.get(`${window.env.POKEAPI_URL}/pokemon/${id}`)
    .then((response) => {
        const result = response.data;
        dispatch({
            type: GET_POKEMON_DETAIL, 
            payload: {
                data: result
            } 
        })
    })
    .catch((error)=>{
        console.log('error',error)
    })
}

export {
    getPokemonList,
    getDetailPokemon
}