import React from 'react';
import { useHistory } from 'react-router';
import { useState } from 'react';
import Images from '../../small/images';
import { ICThreeDot } from '../../../assets';
import styled from "@emotion/styled/macro";

const Header = () => {
    const history = useHistory();
    const [dropDown, setDropDown] = useState(false)
    
    const handleToggle = () => {
        setDropDown(dropDown ? false : true)
    }

    const HeaderEmo = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky!important;
        width: 100%;
        top: 0;
        left: 0;
        padding: 0;
        background-color: transparent;
        z-index: 999;
    `;

    const LogoAppEmo = styled.div`
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        margin: 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    `;

    const TextLogo = styled.h1`
        font-size: 1.5rem;
        margin: 0;
        text-shadow: 0px 8px 5px #000;
        font-weight: normal;
        font-family: 'Pokemon Solid', sans-serif;
        letter-spacing: 0px;
        color: #eba907;
        -webkit-text-stroke: 1.3px #39528e;
    `;

    const MenuItem = styled.div`
        font-size: 18px;
        color: white;
        text-decoration: underline;
        cursor: pointer;
        margin: 0px;
        padding-right: 20px;
        img{
            width: 30px;
        }
    `;

    const DropDwonMenu = styled.ul`
        background: #fff;
        color: #000;
        position: absolute;
        right: 13px;
        box-shadow: 0px 5px 5px #000;
        list-style: none;
        visibility: hidden;
        &.active{
            visibility: visible;
        }
    `;

    const Lists = styled.li`
        font-size: 15px;
        padding:10px 20px;
        border-bottom: 1px solid silver;
    `;

    return (
        <HeaderEmo>
            <LogoAppEmo>
                <TextLogo>PoKeMoN</TextLogo>
            </LogoAppEmo>
            <MenuItem>
                <Images
                    url={ICThreeDot}
                    onClick={handleToggle}
                />
                <DropDwonMenu className = {`${dropDown ? 'active' : '' }`} >
                    <Lists onClick={() => history.push('/')}>Pokemon Lists</Lists>
                    <Lists onClick={() => history.push('/my-pokemon')}>My Pokemon</Lists>
                </DropDwonMenu>
            </MenuItem>
        </HeaderEmo>
    )
}

export default Header
