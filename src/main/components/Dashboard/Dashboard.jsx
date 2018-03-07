import React from 'react';

import logotyp from '../../assets/images/logotyp.png';

import './dashboard.scss';

const Header = () => (
    <div className="dashboard">
        <div className="dashboard__header">
            <div className="dashboard__title">
                Dashboard
            </div>
            <div className="dashboard__followers">
                <div className="dashboard__followers-number">
                    <img className="dashboard__followers-logotyp" src={logotyp} alt="logotyp" />
                    <span>242</span>
                </div>
                <div className="dashboard__followers-text">
                    <span>Followers</span>
                </div>
            </div>
        </div>
    </div>
);

export default Header;
