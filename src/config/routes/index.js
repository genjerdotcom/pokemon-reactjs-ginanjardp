import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MainApp } from '../../pages'

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/">
                        <MainApp />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
