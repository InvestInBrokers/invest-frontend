import React from 'react';

import Header from '../Header';
import Dashboard from '../Dashboard';

import './app.scss';

const App = () => (
    <div className="app">
        <div className="app__header">
            <Header />
        </div>
        <div className="app__content">
            <Dashboard />
        </div>
    </div>
);

export default App;
