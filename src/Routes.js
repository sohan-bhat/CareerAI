import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' Component={Home} />
            </Switch>
        </Router>
    );
};

export default Routes;