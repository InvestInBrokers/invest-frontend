import React, { Component } from 'react';
import { render } from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import reducer from './modules/reducer';
import saga from './saga';

import App from './components/App';

import './styles/main.scss';

class Main extends Component {
    componentWillMount() {
        const sagaMiddleware = createSagaMiddleware();
        // eslint-disable-next-line no-underscore-dangle
        const devToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

        const storeEnhancer = window.DEV_TOOLS_ENABLED && devToolsEnhancer ? compose(
            applyMiddleware(sagaMiddleware),
            devToolsEnhancer,
        ) : (
            applyMiddleware(sagaMiddleware)
        );

        this.store = createStore(reducer, {}, storeEnhancer);

        sagaMiddleware.run(saga);
    }

    render() {
        return (
            <Provider store={this.store}>
                <App />
            </Provider>
        );
    }
}

render(<Main />, document.getElementById('app'));
