import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import { Card, Ball, Images, Header, Glass, Input, Button } from '../../../components';
import { useSelector, useDispatch } from 'react-redux';
import "../pokemon.scss";
import { getDetailPokemon, saveMyPokemon } from '../../../config/redux/actions';
import { useAlert } from 'react-alert';

const PokemonDetail = (props) => {
    const { pokemonDetail } = useSelector(state => state.pokemonReducer);
    const [isCaught, setCaught] = useState(false)
    const nameForm = useRef(null)
    const dispatch = useDispatch();
    const alert = useAlert();
    const history = useHistory();
    
    useEffect(() => {
        const id = props.match.params.id;
        dispatch(getDetailPokemon(id))
    }, [dispatch, props])

    const getRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max));
    };

    const throwPokeBall = () => {
        if (getRandomInt(2) === 1) {
            alert.success('Yeay! You caught the Pokemon!')
            setCaught(true)
            console.log('Yeay! You caught the Pokemon!', isCaught)
        }else{
            alert.error('failed to catch pokemon!')
            setCaught(false)
            console.log('failed to catch pokemon!', isCaught)
        }
    };

    const saveName = async () => {
        const form = nameForm.current;
        if(isCaught){
            const doSave = await dispatch(saveMyPokemon(
                {   
                    _id_pokemon: pokemonDetail.data.id,
                    name: form['pokemon_name'].value ? form['pokemon_name'].value : pokemonDetail.data.name, 
                    imgUrl: pokemonDetail.data.sprites.other['official-artwork'].front_default
                } 
            ))
            doSave && doSave.payload === null ? alert.error('Please type different name!') : history.push(`/my-pokemon`);
        }else{
            alert.error('Catch First!')
        }
    }

    return (
        pokemonDetail.data.sprites ? <div>
            <Header/>
            <section className={`detail-card`}>
                <div className="wrapper-list backInLeft">
                    <Card 
                        initial={pokemonDetail.data.name}
                        title={pokemonDetail.data.name}
                        id={pokemonDetail.data.id}
                        type="FRONT"
                    >
                        <Images
                            className="avatar"
                            url={pokemonDetail.data.sprites.other['official-artwork'].front_default}
                            alt={pokemonDetail.data.name}
                        />
                    </Card>
                </div>
                <Glass {...pokemonDetail.data} />
                <style id={`hover`}></style>
            </section>
            {
                !isCaught ? 
                    <Ball onClick={throwPokeBall} /> 
                :   <form onSubmit={e => { e.preventDefault(); }} ref={nameForm} className="wrapper-form-pokemon-name">
                        <Input type="text" name={'pokemon_name'} placeholder="Pokemon name..."/>
                        <Button onClick={saveName} type="button" title="Save pokemon name" backgroundColor="#d5b623" color="#000"/>
                    </form>
            }
           
        </div>
        : 'loading...'
    )
}

export default withRouter(PokemonDetail)
