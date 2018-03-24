import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Header from '../Header';
import Dashboard from '../Dashboard';
import Markets from '../Markets';
import UnavailableFeature from '../UnavailableFeature';

import './app.scss';

const DemoComponent = () => (<div><span>Router</span></div>);

class App extends Component {
    render() {
        const { splashScreenOpened } = this.props;
        return (
            <div className="app">
                <div className="app__header">
                    <Header />
                </div>
                <div className="app__content">
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/markets" component={Markets} />
                    <Route path="/traders" component={DemoComponent} />
                    <Route path="/support" component={DemoComponent} />
                </div>
                {splashScreenOpened && (
                    <UnavailableFeature />
                )}
            </div>
        );
    }
}

App.propTypes = {
    splashScreenOpened: PropTypes.bool.isRequired,
};

export default App;
