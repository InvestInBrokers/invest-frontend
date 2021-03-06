import React from 'react';

import Translate from '../Translate';
import PageTitle from '../PageTitle';
import Tiles from '../Tiles';
import TilesHeader from '../Tiles/TilesHeader';
import TilesMoreActions from '../Tiles/TilesMoreActions';
import TilesStatistics from '../Tiles/TilesStatistics';
import Table from '../Table';

import Statistics from '../Statistics';
import CircleStatistic from '../CircleStatistic';
import CircleIcon from '../icons/Circle';
import LogoTyp from '../icons/LogoTyp';

import './dashboard.scss';

import { successfulTradersTable, depositTable, yourtradesTable } from '../../../../mocks/tables';

const Dashboard = () => (
    <div className="dashboard">
        <PageTitle title={<Translate value="header.menu.dashboard" />}>
            <div className="dashboard__followers">
                <div className="dashboard__followers-number">
                    <span className="dashboard__followers-logotyp">
                        <LogoTyp />
                    </span>
                    <span>242</span>
                </div>
                <div className="dashboard__followers-text">
                    <Translate value="common.followers" />
                </div>
            </div>
        </PageTitle>
        <div className="dashboard__content">
            <Tiles
                HeaderComponent={
                    <TilesHeader
                        title={<Translate value="common.statistics" />}
                        actionComponent={<TilesStatistics />}
                    />
                }
                size={Tiles.size.TWO_X}
            >
                <Statistics />
            </Tiles>
            <Tiles
                HeaderComponent={
                    <TilesHeader
                        title={<Translate value="common.your_trades" />}
                        actionComponent={<TilesMoreActions />}
                    />
                }
                size={Tiles.size.TWO_X}
                bottomText={<Translate value="common.view_more" />}
            >
                <div>
                    <div className="trades-nav">
                        <ul className="trades-nav__ul">
                            <li className="trades-nav__li trades-nav__li--active">
                                <Translate value="common.all" />
                            </li>
                            <li className="trades-nav__li">
                                <span className="trades-nav__circle trades-nav__circle--open">
                                    <CircleIcon />
                                </span>
                                <Translate value="common.open" />
                            </li>
                            <li className="trades-nav__li">
                                <span className="trades-nav__circle trades-nav__circle--close">
                                    <CircleIcon />
                                </span>
                                <Translate value="common.close" />
                            </li>
                        </ul>
                    </div>
                    <Table
                        name={yourtradesTable.name}
                        head={yourtradesTable.head}
                        body={yourtradesTable.body}
                        bodyClass={yourtradesTable.bodyClass}
                        headClass={yourtradesTable.headClass}
                    />
                </div>
            </Tiles>
            <Tiles
                HeaderComponent={<TilesHeader title={<Translate value="common.successful_traders" />} />}
                size={Tiles.size.TWO_X}
                bottomText={<Translate value="common.view_more" />}
            >
                <Table
                    name={successfulTradersTable.name}
                    head={successfulTradersTable.head}
                    body={successfulTradersTable.body}
                    bodyClass={successfulTradersTable.bodyClass}
                    headClass={successfulTradersTable.headClass}
                />
            </Tiles>
            <Tiles
                HeaderComponent={
                    <TilesHeader
                        title={<Translate value="common.deposit" />}
                        actionComponent={<TilesMoreActions />}
                    />
                }
                size={Tiles.size.ONE_X}
                bottomText={<Translate value="common.view_more" />}
            >
                <Table
                    name={depositTable.name}
                    head={depositTable.head}
                    body={depositTable.body}
                    bodyClass={depositTable.bodyClass}
                    headClass={depositTable.headClass}
                />
            </Tiles>
            <Tiles
                HeaderComponent={
                    <TilesHeader
                        title={<Translate value="common.profit_this_month" />}
                        actionComponent={<TilesMoreActions />}
                    />
                }
                size={Tiles.size.ONE_X}
                bottomText={<Translate value="common.view_statistics" />}
            >
                <CircleStatistic percent="+4.7%" />
            </Tiles>
        </div>
    </div>
);

export default Dashboard;
