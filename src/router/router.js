import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Init from '../pages/init';
import AboutMe from '../pages/aboutMe';
import Experience from '../pages/experience';
import Knowledge from '../pages/knowledge';
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
                <Route exact path="/knowledge">
                    <Knowledge />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default RouterNavigation;