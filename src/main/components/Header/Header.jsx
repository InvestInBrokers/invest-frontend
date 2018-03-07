import React from 'react';

import Translate from '../Translate';

import './header.scss';

const Header = () => (
    <div className="header">
        <div className="header__logo" />
        <div className="header__menu">
            <ul className="header__menu-list">
                <li className="header__menu-item">Dashboard</li>
                <li className="header__menu-item">Markets</li>
                <li className="header__menu-item">Traders</li>
                <li className="header__menu-item">
                    <Translate value="test.test" />
                </li>
            </ul>
        </div>
        <div className="header__navigation">
            <div className="header__actions" />
            <div className="header__avatar" />
        </div>
    </div>
);

export default Header;
