import React from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Header from '../Header';
import Dashboard from '../Dashboard';
import UnavailableFeature from '../UnavailableFeature';

import './app.scss';

const DemoComponent = () => (<div><span>Router</span></div>);

const App = ({ splashScreenOpened }) => (
    <Router>
        <div className="app">
            <div className="app__header">
                <Header />
            </div>
            <div className="app__content">
                <Route exact path="/" component={Dashboard} />
                <Route path="/markets" component={DemoComponent} />
                <Route path="/traders" component={DemoComponent} />
                <Route path="/support" component={DemoComponent} />
            </div>
            {splashScreenOpened && (
                <UnavailableFeature />
            )}
        </div>
    </Router>
);

App.propTypes = {
    splashScreenOpened: PropTypes.bool.isRequired,
};

export default App;
