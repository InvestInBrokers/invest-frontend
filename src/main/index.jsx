import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

import './styles/main.scss';

const Main = () => (<App />);

render(<Main />, document.getElementById('app'));
