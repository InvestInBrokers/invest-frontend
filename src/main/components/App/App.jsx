import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header';
import Dashboard from '../Dashboard';

import './app.scss';

const DemoComponent = () => (<span>Router</span>);

const App = () => (
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
    </div>
);

export default App;
