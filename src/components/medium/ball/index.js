import React from 'react'
import { BallPokemon } from '../../../assets';
import Images from '../../small/images';
import styled from "@emotion/styled/macro";

const Ball = ({...props}) => {

    const BallEmo = styled.div`
        justify-content: center;
        align-items: center;
        position: sticky;
        bottom: 0;
        left: 0;
        z-index: 99;
        width: 100%;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        padding:20px 0;
        margin-top: 30px;
        img{
            width:100px;
        }
    `;

    const TextEmo = styled.p`
        font-size: 1.5rem;
        margin: 0;
        text-shadow: 0px 2px 5px #000;
        font-weight: normal;
        font-family: 'Pokemon Solid', sans-serif;
        letter-spacing: 0px;
        color: #eba907;
        -webkit-text-stroke: 1.3px #39528e;
    `;

    return (
        <BallEmo>
            <TextEmo>Press to Catch!</TextEmo>
            <Images
                className="image-ball"
                url={BallPokemon}
                {...props}
            />
        </BallEmo>
    )
}

export default Ball
