import React from 'react';
import { useHistory } from 'react-router';
import styled from "@emotion/styled/macro";

const Glass = ({...props}) => {
    const history = useHistory();

    const FrostedGlassEmo = styled.div`
        width: 500px;
        max-width: 90%;
        opacity: 1;
        background: inherit;
        display: inline-block;
        position: relative;
        z-index: 1;
        padding:20px;
        overflow: hidden;
        box-sizing: border-box;
        box-shadow: 0 .5em 1em rgba(0,0,0,.3);
        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            top: 0; right: 0; bottom: 0; left: 0;
            background: inherit;
            box-shadow: inset 0 0 3000px rgba(255,255,255,.3);
            filter: blur(10px);
            margin: -20px;
        }
    `;

    const PokemonNameEmo = styled.div`
        color: #fff;
        padding: 10px;
        margin-bottom: 30px;
        position: relative;
        text-align: right;
        font-style: italic;
        font-size: 1rem;
        font-weight: bold;
        text-shadow: 0px 3px 2px #000;
        padding-right: 15px;
        font-family: 'Pokemon Solid', sans-serif;
        letter-spacing: 5px;
        &:after {
            // background: #dbbb22;
            background: linear-gradient(to right, rgba(169,208,113,0),#dbbb22); 
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            transform: skew(-30deg);
            -webkit-transform: skew(-30deg);
            -moz-transform: skew(-30deg); 
            -o-transform: skew(-30deg); 
            z-index: -1;
        }
    `;

    const WrapperInfoEmo = styled.div`
        display:flex;
        justify-content: center;
        padding: 15px 0;
        border-bottom: 1px solid #858585;
    `;

    const ListBoldEmo = styled.div`
        justify-content: space-between;
        align-items: center;
        font-style: italic;
        font-size: 13px;
        font-size: 18px;
        color: #d4b524;
        font-weight: 700;
    `;

    const ListValEmo = styled.div`
        justify-content: space-between;
        align-items: center;
        font-style: italic;
        font-size: 13px;
    `;

    const WrapperActionDetailEmo = styled.div`
        margin-top:30px;
        display:flex;
        justify-content: right;
    `;

    const ButtonActionEmo = styled.button`
        justify-content: space-between;
        align-items: left;
        padding: 10px 15px;
        background: #56403d;
        color: #fff;
        box-shadow: none;
        border: none;
    `;

    return (
        <FrostedGlassEmo className="">
            <PokemonNameEmo>{props.name}</PokemonNameEmo>
            <WrapperInfoEmo>
                <ListBoldEmo>Types</ListBoldEmo>
            </WrapperInfoEmo>
            <WrapperInfoEmo>
                <ListValEmo>{
                    props.types.map((val) => {
                        return val.type.name
                    }).join(', ')
                }</ListValEmo>
            </WrapperInfoEmo>
            <WrapperInfoEmo>
                <ListBoldEmo>Moves</ListBoldEmo>
            </WrapperInfoEmo>
            <WrapperInfoEmo>
                <ListValEmo>{
                    props.moves.map((val) => {
                        return val.move.name
                    }).join(', ')
                }</ListValEmo>
            </WrapperInfoEmo>
            <WrapperActionDetailEmo>
                <ButtonActionEmo  onClick={()=> history.push('/')}>Back</ButtonActionEmo>
            </WrapperActionDetailEmo>

        </FrostedGlassEmo>

    )
}

export default Glass
