import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PokemonDetail from '../Pokemon/Detail'
import PokemonLists from '../Pokemon/Lists'
import MyPokemonLists from '../Pokemon/MyOwned'
import styled from "@emotion/styled/macro";
import { MainBg } from '../../assets';
import { transitions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const MainApp = () => {
    const AppStyle = styled.div`
        background: url(${MainBg});
        background-repeat: no-repeat!important;
        background-size: cover;
        background-attachment: fixed;
        position: relative;
        min-height: 100vh;
        &:before{
            content: "";
            width:100%;
            height: 100%;
            left: 0;
            top: 0;
            position: absolute;
            background: rgba(51,56,68,0.3);
        }
        &:has(> a.active){
            position: relative;
        }
    `;

    const options = {
        timeout: 2000,
        transition: transitions.SCALE,
        containerStyle: {
            zIndex: 99,
            position: 'sticky',
            top:0,
            left:0,
            bottom:0
        }
    }

    return (

        <AppStyle id="app">
            <AlertProvider template={AlertTemplate} {...options}>
                <Router>
                    <Switch>
                        <Route path="/my-pokemon">
                            <MyPokemonLists />
                        </Route>
                        <Route path="/:id">
                            <PokemonDetail />
                        </Route>
                        <Route path="/">
                            <PokemonLists />
                        </Route>
                    </Switch>
                </Router>
            </AlertProvider>
        </AppStyle>
    )
}

export default MainApp
