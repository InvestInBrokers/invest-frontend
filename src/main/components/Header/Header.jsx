import React from 'react';

import Translate from '../Translate';

import logo from '../../assets/images/invest-logo.png';
import avatar from '../../assets/images/avatar-example.jpg';

import './header.scss';

const Header = () => (
    <div className="header">
        <div className="header__container">
            <div className="header__logo-menu">
                <div className="header__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="header__menu">
                    <ul className="header__menu-list">
                        <li className="header__menu-item header__menu-item--active">Dashboard</li>
                        <li className="header__menu-item">Markets</li>
                        <li className="header__menu-item">Traders</li>
                        <li className="header__menu-item">
                            <Translate value="test.test" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header__navigation">
                <div className="header__actions">
                    <div className="header__action header__action--messages">
                        <i className="far fa-envelope" />
                    </div>
                    <div className="header__action header__action--settings">
                        <i className="fa fa-cog" />
                    </div>
                    <div className="header__action header__action--alerts">
                        <i className="far fa-bell" />
                        <span className="header__alerts-count">2</span>
                    </div>
                </div>
                <div className="header__avatar">
                    <img className="header__avatar-img" src={avatar} alt="avatar" />
                    <span className="header__user-level">Lvl 1</span>
                </div>
                <div className="header__user">
                    <div className="header__user-name">
                        Paul Miller
                    </div>
                    <div className="header__since">
                        Since 12 Feb, 18’
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Header;
