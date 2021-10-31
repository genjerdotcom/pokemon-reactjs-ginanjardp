import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { HeadTitle, Card, Header, Images, Text } from '../../../components';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowLeft, ArrowRight } from '../../../assets';
import { getPokemonList } from '../../../config/redux/actions';
import "../pokemon.scss";

const PokemonLists = () => {
    const history = useHistory();
    const [counter, setCounter] = useState(1);
    const { pokemonLists } = useSelector(state => state.pokemonReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemonList(counter));
    }, [counter, dispatch])

    const handlePrevious = () => {
        setCounter(counter <= 1 ? 1 : counter - 1)
    }

    const handleNext = () => {
        setCounter(counter === pokemonLists.page.totalPage ? pokemonLists.page.totalPage   : counter + 1)
    }

    const handleClick = (id) => {
        let elems = document.querySelectorAll(".card");

        [].forEach.call(elems, function(el) {
            el.parentElement.parentElement.classList.remove("animated");
            el.parentElement.parentElement.classList.add("zoomOut");
        });

        document.getElementById(id).parentElement.parentElement.classList.remove("zoomOut");
        setTimeout(function () {
            document.getElementById(id).parentElement.parentElement.classList.add("backOutLeft");
        }, 0)
        setTimeout(function () {
            history.push(`/${id}`)
        }, 2000)
    }

    return (
        pokemonLists.data ? 
        <div>
            <Header/>
            <HeadTitle className="title-large" title="Pokemon Lists" />
            <section className={`cards`}>
                {
                    pokemonLists.data.map((pokemon) => {
                        return <div key={pokemon.id} className="wrapper-list">
                                <Card 
                                    initial="back"
                                    title={pokemon.name}
                                    id={pokemon.id}
                                    onClick={()=>{
                                        handleClick(pokemon.id)
                                    }}
                                />
                                <HeadTitle className="title-small" title={`${pokemon.name}`} />
                                <Text className="sub-title" title={`Owned (${pokemon.total})`} />
                            </div>
                    })
                }
                <style id={`hover`}></style>
            </section>
            <div className="wrapper-pagination">
                <div className="items">
                    <Images
                        url={ArrowLeft}
                        onClick={handlePrevious}
                    />
                </div>
                <div className="items">
                    Page {pokemonLists.page.currentPage} of {pokemonLists.page.totalPage}
                </div>
                <div className="items">
                    <Images
                        url={ArrowRight}
                        onClick={handleNext}
                    />
                </div>
            </div>
        </div>
        : 'loading...'
    )
}

export default PokemonLists
