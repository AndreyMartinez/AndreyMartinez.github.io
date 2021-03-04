import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Init from '../pages/init';
import AboutMe from '../pages/aboutMe';

function RouterNavigation() {
    return (
        <BrowserRouter>
            <Switch>
                <Route  exact path="/">
                    <Init />
                </Route>
                <Route exact path="/aboutMe">
                    <AboutMe />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default RouterNavigation;