import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Init from '../pages/init';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Init />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;