import React from 'react';
import HomePage from './Pages/Home/HomePage';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' Component={HomePage} />
            </Switch>
        </Router>
    );
};

export default Routes;