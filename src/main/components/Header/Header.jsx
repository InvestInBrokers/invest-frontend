import React from 'react';

const Header = () => {
	return (
	    <div className="header">
            <div className="header__logo">
            </div>
            <div className="header__menu">
                <ul className="header__menu-list">
                    <li className="header__menu-item">Dashboard</li>
                    <li className="header__menu-item">Markets</li>
                    <li className="header__menu-item">Traders</li>
                    <li className="header__menu-item">Support</li>
                </ul>
            </div>
            <div className="header__navigation">
                <div className="header__actions">

                </div>
                <div className="header__avatar">

                </div>
            </div>
        </div>
    );
};

export default Header;
