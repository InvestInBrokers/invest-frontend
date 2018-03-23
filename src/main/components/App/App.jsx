import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Header from '../Header';
import Dashboard from '../Dashboard';
import UnavailableFeature from '../UnavailableFeature';

import './app.scss';

const DemoComponent = () => (<span>Router</span>);

const App = ({ splashScreenOpened }) => (
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
);

App.propTypes = {
    splashScreenOpened: PropTypes.bool.isRequired,
};

export default App;
