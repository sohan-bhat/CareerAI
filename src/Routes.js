import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Response from './Pages/Response';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' Component={Home} />
            </Switch>
            <Switch>
                <Route path='/response' Component={Response} />
            </Switch>
        </Router>
    );
};

export default Routes;