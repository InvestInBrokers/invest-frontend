import React from 'react';

import LogoTyp from '../../icons/LogoTyp';

import './dashboard-header.scss';

const DashboardHeader = () => (
    <div className="dashboard-header">
        <div className="dashboard-header__title">
            Dashboard
        </div>
        <div className="dashboard-header__followers">
            <div className="dashboard-header__followers-number">
                {/*<img className="dashboard-header__followers-logotyp" src={logotyp} alt="logotyp" />*/}
                <span className="dashboard-header__followers-logotyp">
                    <LogoTyp />
                </span>
                <span>242</span>
            </div>
            <div className="dashboard-header__followers-text">
                <span>Followers</span>
            </div>
        </div>
    </div>
);

export default DashboardHeader;
