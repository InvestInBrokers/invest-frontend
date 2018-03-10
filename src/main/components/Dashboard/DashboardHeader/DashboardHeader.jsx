import React from 'react';

import logotyp from '../../../assets/images/logotyp.png';

import './dashboard-header.scss';

const DashboardHeader = () => (
    <div className="dashboard-header">
        <div className="dashboard-header__title">
            Dashboard
        </div>
        <div className="dashboard-header__followers">
            <div className="dashboard-header__followers-number">
                <img className="dashboard-header__followers-logotyp" src={logotyp} alt="logotyp" />
                <span>242</span>
            </div>
            <div className="dashboard-header__followers-text">
                <span>Followers</span>
            </div>
        </div>
    </div>
);

export default DashboardHeader;
