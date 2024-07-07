import React, { Component } from 'react';
import HomePage from './Pages/Home/HomePage';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
// import ReactGA from 'react-ga4'
// ReactGA.initialize('G-YTJ4RF70GN')
// ReactGA.send({ hitType: "pageview", page: "/", title: "Home Page" })

class Routes extends Component {
    render() {
        return (
            <>
            <Router>
                <Switch>
                    <Route path='/' Component={HomePage} />
                </Switch>
            </Router>
            </>
        );
    }
};

export default Routes;