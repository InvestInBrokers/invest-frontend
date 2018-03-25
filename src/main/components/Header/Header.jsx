import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Translate from '../Translate';
import Badge from '../Badge';
import CircleImage from '../CircleImage';

import EnvelopeIcon from '../icons/Envelope';
import CogeIcon from '../icons/Cog';
import BellIcon from '../icons/Bell';

import AvatarImage from '../../assets/images/claire-ridley-vinopolis.jpg';

import InvestLogo from '../../assets/images/invest-logo.png';

import './header.scss';

class Header extends Component {
    render() {
        const { onSetModalStatus } = this.props;
        return (
            <div className="header">
                <div className="header__container">
                    <div className="header__logo-menu">
                        <div className="header__logo">
                            <img src={InvestLogo} alt="Invest logo" />
                        </div>
                        <div className="header__menu">
                            <ul className="header__menu-list">
                                <li>
                                    <NavLink
                                        exact
                                        className="header__menu-item"
                                        activeClassName="header__menu-item--active"
                                        to="/"
                                    >
                                        <Translate value="header.menu.dashboard" />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="header__menu-item"
                                        activeClassName="header__menu-item--active"
                                        to="/markets"
                                    >
                                        <Translate value="header.menu.markets" />
                                    </NavLink>
                                </li>
                                <li className="header__menu-item">
                                    <NavLink
                                        className="header__menu-item"
                                        activeClassName="header__menu-item--active"
                                        to="/traders"
                                    >
                                        <Translate value="header.menu.traders" />
                                    </NavLink>
                                </li>
                                <li className="header__menu-item" onClick={() => { onSetModalStatus(true); }}>
                                    <Translate value="header.menu.support" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header__navigation">
                        <div className="header__actions">
                            <div
                                onClick={() => { onSetModalStatus(true); }}
                                className="header__action header__action--messages"
                            >
                                <EnvelopeIcon />
                            </div>
                            <div
                                onClick={() => { onSetModalStatus(true); }}
                                className="header__action header__action--settings"
                            >
                                <CogeIcon />
                            </div>
                            <div
                                onClick={() => { onSetModalStatus(true); }}
                                className="header__action header__action--alerts"
                            >
                                <BellIcon />
                                <span className="header__alerts-count">2</span>
                            </div>
                        </div>
                        <div className="header__avatar">
                            <span onClick={() => { onSetModalStatus(true); }} className="header__avatar-img">
                                <CircleImage avatarImg={AvatarImage} size={CircleImage.size.BIG} />
                            </span>
                            <span onClick={() => { onSetModalStatus(true); }} className="header__user-level">
                                <Badge text="Lvl 1" color={Badge.color.GREEN} />
                            </span>
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
    }
}

Header.propTypes = {
    onSetModalStatus: PropTypes.func.isRequired,
};

export default Header;
