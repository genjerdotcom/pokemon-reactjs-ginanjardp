import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { HeadTitle, Card, Header, Images, Button } from '../../../components';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowLeft, ArrowRight } from '../../../assets';
import { getMyPokemonList, removeMyPokemon } from '../../../config/redux/actions';
import { useAlert } from 'react-alert';
import "../pokemon.scss";

const MyPokemonLists = () => {
    const history = useHistory();
    const [counter, setCounter] = useState(1);
    const { myPokemonList } = useSelector(state => state.myPokemonReducer);
    const dispatch = useDispatch();
    const alert = useAlert();

    useEffect(() => {
        dispatch(getMyPokemonList(counter));
    }, [counter, dispatch])

    const handlePrevious = () => {
        setCounter(counter <= 1 ? 1 : counter - 1)
    }

    const handleNext = () => {
        setCounter(counter === myPokemonList.page.totalPage ? myPokemonList.page.totalPage   : counter + 1)
    }

    const handleRemove = async (id) => {
        const deleteData = await dispatch(removeMyPokemon(id))
        if(deleteData && deleteData.status !== 200){
            return alert.error('Failed remove')
        }
        alert.success('Pokemon removed')
        dispatch(getMyPokemonList(counter));
    }

    const handleClick = (id, name_id) => {
        let elems = document.querySelectorAll(".card");

        [].forEach.call(elems, function(el) {
            el.parentElement.parentElement.classList.remove("animated");
            el.parentElement.parentElement.classList.add("zoomOut");
        });

        document.getElementById(name_id).parentElement.parentElement.classList.remove("zoomOut");
        setTimeout(function () {
            document.getElementById(name_id).parentElement.parentElement.classList.add("backOutLeft");
        }, 0)
        setTimeout(function () {
            history.push(`/${id}`)
        }, 2000)
    }

    return ( 
        <div>
            <Header/>
            <HeadTitle className="title-large" title="My Pokemons" />
            <section className={`cards`}>
                {
                    myPokemonList.data.length > 0 ?
                        myPokemonList.data.map((pokemon) => {
                            return <div key={pokemon.id} className="wrapper-list">
                                <Card 
                                    initial={pokemon.name}
                                    title={pokemon.name}
                                    id={pokemon.id} 
                                    type="FRONT"
                                    onClick={()=>{
                                        handleClick(pokemon._id_pokemon, pokemon.id)
                                    }}
                                >
                                    <Images
                                        className="avatar"
                                        url={pokemon.imgUrl}
                                        alt={pokemon.name}
                                    />
                                </Card>
                                <HeadTitle className="title-small" title={pokemon.name} />
                                <Button onClick={() => handleRemove(pokemon.id)} title="delete" color="#fff" backgroundColor="#a54848" />
                            </div>
                        })
                    : 'Catch Pokemon first!'
                }
                <style id={`hover`}></style>
            </section>
            {
                myPokemonList.data.length > 0 ?
                <div className="wrapper-pagination">
                    <div className="items">
                        <Images
                            url={ArrowLeft}
                            onClick={handlePrevious}
                        />
                    </div>
                    <div className="items">
                        Page {myPokemonList.page.currentPage} of {myPokemonList.page.totalPage}
                    </div>
                    <div className="items">
                        <Images
                            url={ArrowRight}
                            onClick={handleNext}
                        />
                    </div>
                </div>
                : ''
            }
            
        </div>
    )
}

export default MyPokemonLists
