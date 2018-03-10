import React from 'react';

import DashboardHeader from './DashboardHeader';
import Tiles from '../Tiles';
import TilesHeader from '../Tiles/TilesHeader';
import TilesMoreActions from '../Tiles/TilesMoreActions';
import TilesStatistics from '../Tiles/TilesStatistics';
import Table from '../Table';
import CircleStatistic from '../CircleStatistic';

import './dashboard.scss';

import { successfulTradersTable, depositTable, yourtradesTable } from '../../../../mocks/tables';

const Dashboard = () => (
    <div className="dashboard">
        <DashboardHeader />
        <div className="dashboard__content">
            <Tiles
                HeaderComponent={
                    <TilesHeader title="Statistics" actionComponent={<TilesStatistics />} />
                }
                size={Tiles.size.TWO_X}
            >
                <div>
                    Dupa
                </div>
            </Tiles>
            <Tiles
                HeaderComponent={<TilesHeader title="Your trades" actionComponent={<TilesMoreActions />} />}
                size={Tiles.size.TWO_X}
                bottomText="View more"
            >
                <div>
                    <div className="trades-nav">
                        <ul className="trades-nav__ul">
                            <li className="trades-nav__li trades-nav__li--active">All</li>
                            <li className="trades-nav__li">
                                <i className="fa fa-circle trades-nav__circle trades-nav__circle--open" />
                                <span>Open</span>
                            </li>
                            <li className="trades-nav__li">
                                <i className="fa fa-circle trades-nav__circle trades-nav__circle--close" />
                                <span>Close</span>
                            </li>
                        </ul>
                    </div>
                    <Table
                        name={yourtradesTable.name}
                        head={yourtradesTable.head}
                        body={yourtradesTable.body}
                    />
                </div>
            </Tiles>
            <Tiles
                HeaderComponent={<TilesHeader title="Successful traders" />}
                size={Tiles.size.TWO_X}
                bottomText="View more"
            >
                <Table
                    name={successfulTradersTable.name}
                    head={successfulTradersTable.head}
                    body={successfulTradersTable.body}
                />
            </Tiles>
            <Tiles
                HeaderComponent={<TilesHeader title="Deposit" actionComponent={<TilesMoreActions />} />}
                size={Tiles.size.ONE_X}
                bottomText="View more"
            >
                <Table
                    name={depositTable.name}
                    head={depositTable.head}
                    body={depositTable.body}
                />
            </Tiles>
            <Tiles
                HeaderComponent={<TilesHeader title="Profit this month" actionComponent={<TilesMoreActions />} />}
                size={Tiles.size.ONE_X}
                bottomText="View statistics"
            >
                <CircleStatistic percent="+4.7%" />
            </Tiles>
        </div>
    </div>
);

export default Dashboard;
