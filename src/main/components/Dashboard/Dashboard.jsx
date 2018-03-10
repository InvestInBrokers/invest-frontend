import React from 'react';

import DashboardHeader from './DashboardHeader';
import Tiles from '../Tiles';

import './dashboard.scss';

const Dashboard = () => (
    <div className="dashboard">
        <DashboardHeader />
        <div className="dashboard__content">
            <Tiles />
        </div>
    </div>
);

export default Dashboard;
