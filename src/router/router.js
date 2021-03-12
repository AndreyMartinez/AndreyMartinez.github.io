import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Init from '../pages/init';
import AboutMe from '../pages/aboutMe';
import Experience from '../pages/experience';

function RouterNavigation() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Init />
                </Route>
                <Route exact path="/aboutMe">
                    <AboutMe />
                </Route>
                <Route exact path="/experience">
                    <Experience />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default RouterNavigation;