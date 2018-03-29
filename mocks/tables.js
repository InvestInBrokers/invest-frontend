/* eslint-disable max-len */
import React from 'react';
import CircleImage from '../src/main/components/CircleImage';
import Badge from '../src/main/components/Badge';
import Translate from '../src/main/components/Translate';

import Avatar1 from '../src/main/assets/images/avatar2.jpg';
import Avatar2 from '../src/main/assets/images/avatar3.jpg';
import Avatar3 from '../src/main/assets/images/avatar_demo_mo.jpg';
import Avatar4 from '../src/main/assets/images/claire-ridley-vinopolis.jpg';
import Avatar5 from '../src/main/assets/images/avatar4.jpg';
import Avatar6 from '../src/main/assets/images/avatar5.jpg';
import Btc from '../src/main/assets/images/BTC.png';
import Usdt from '../src/main/assets/images/usdt.png';
import Eth from '../src/main/assets/images/eth.jpg';

import AngleDown from '../src/main/components/icons/AngleDown';
import ArrowDown from '../src/main/components/icons/ArrowDown';
import ArrowUp from '../src/main/components/icons/ArrowUp';

export const successfulTradersTable = {
    name: 'successful-traders-table',
    head: [
        { title: '' },
        { title: (<Translate value="tables.successful_traders.head.followers" />) },
        { title: (<Translate value="tables.successful_traders.head.last_30_days" />) }],
    bodyClass: '',
    headClass: '',
    body: [
        {
            id: 1,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--mulled-wine table__td--text-left',
                    body: (
                        <div className="table--center-elem">
                            <span className="table__circle-img">
                                <CircleImage avatarImg={Avatar1} size={CircleImage.size.SMALL} />
                            </span>
                            <span className="table__fullname">Emma May</span>
                            <Badge text="Lvl 1" color={Badge.color.GREEN} />
                        </div>
                    ),
                },
                {
                    tdClass: '',
                    body: (<span>325</span>),
                },
                {
                    tdClass: 'table__td--green table__td--width-28',
                    body: (<span>+20%</span>),
                },
            ],
        },
        {
            id: 2,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--mulled-wine table__td--text-left',
                    body: (
                        <div className="table--center-elem">
                            <span className="table__circle-img">
                                <CircleImage avatarImg={Avatar2} size={CircleImage.size.SMALL} />
                            </span>
                            <span className="table__fullname">Andrew Philips</span>
                            <Badge text="Lvl 2" color={Badge.color.GREEN_BLUE} />
                        </div>
                    ),
                },
                {
                    tdClass: '',
                    body: (<span>248</span>),
                },
                {
                    tdClass: 'table__td--green table__td--width-28',
                    body: (<span>+15%</span>),
                },
            ],
        },
        {
            id: 3,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--mulled-wine table__td--text-left',
                    body: (
                        <div className="table--center-elem">
                            <span className="table__circle-img">
                                <CircleImage avatarImg={Avatar3} size={CircleImage.size.SMALL} />
                            </span>
                            <span className="table__fullname">Alice Mayers</span>
                            <Badge text="Lvl 3" color={Badge.color.BLUE} />
                        </div>
                    ),
                },
                {
                    tdClass: '',
                    body: (<span>150</span>),
                },
                {
                    tdClass: 'table__td--green table__td--width-28',
                    body: (<span>+15%</span>),
                },
            ],
        },
    ],
};

export const depositTable = {
    name: 'deposit-table',
    head: [{ title: '' }, { title: '' }],
    bodyClass: '',
    headClass: 'table__head--empty',
    body: [
        {
            id: 1,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--mulled-wine table__td--text-left',
                    body: (
                        <div className="table--center-elem">
                            <span className="table__circle-img">
                                <CircleImage avatarImg={Btc} size={CircleImage.size.SMALL} />
                            </span>
                            <span>BTC</span>
                        </div>
                    ),
                },
                {
                    tdClass: '',
                    body: (<span>0.51</span>),
                },
            ],
        },
        {
            id: 2,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--mulled-wine table__td--text-left',
                    body: (
                        <div className="table--center-elem">
                            <span className="table__circle-img">
                                <CircleImage avatarImg={Usdt} size={CircleImage.size.SMALL} />
                            </span>
                            <span>USDT</span>
                        </div>
                    ),
                },
                {
                    tdClass: '',
                    body: (<span>100.15</span>),
                },
            ],
        },
        {
            id: 3,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--mulled-wine table__td--text-left',
                    body: (
                        <div className="table--center-elem">
                            <span className="table__circle-img">
                                <CircleImage avatarImg={Eth} size={CircleImage.size.SMALL} />
                            </span>
                            <span>ETH</span>
                        </div>
                    ),
                },
                {
                    tdClass: '',
                    body: (<span>15.55</span>),
                },
            ],
        },
    ],
};

export const yourtradesTable = {
    name: 'your-trades-table',
    head: [{ title: '' }, { title: '' }, { title: '' }],
    bodyClass: '',
    headClass: '',
    body: [
        {
            id: 1,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--padding-16-0 table__td--mulled-wine table__td--text-left table__td--width-15 table__td--font-size-12',
                    body: (<span className="BTC">BTC/USDT</span>),
                },
                {
                    tdClass: 'table__td--text-left',
                    body: (<span>Bittrex</span>),
                },
                {
                    tdClass: '',
                    body: (<span>-5%</span>),
                },
                {
                    tdClass: 'table__td--width-17',
                    body: (<Badge text="2.02.2018" size={Badge.size.BIG} color={Badge.color.RED} />),
                },
            ],
        },
        {
            id: 2,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--padding-16-0 table__td--mulled-wine table__td--text-left table__td--width-15 table__td--font-size-12',
                    body: (<span className="BTC">BTC/ETH</span>),
                },
                {
                    tdClass: 'table__td--text-left',
                    body: (<span>Bittrex</span>),
                },
                {
                    tdClass: '',
                    body: (<span>0%</span>),
                },
                {
                    tdClass: 'table__td--width-17',
                    body: (<Badge text="2.02.2018" size={Badge.size.BIG} color={Badge.color.GREY} />),
                },
            ],
        },
        {
            id: 3,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--padding-16-0 table__td--mulled-wine table__td--text-left table__td--width-15 table__td--font-size-12',
                    body: (<span className="BTC">BTC/DASH</span>),
                },
                {
                    tdClass: 'table__td--text-left',
                    body: (<span>Bittrex</span>),
                },
                {
                    tdClass: '',
                    body: (<span>7%</span>),
                },
                {
                    tdClass: 'table__td--width-17',
                    body: (<Badge text="2.02.2018" size={Badge.size.BIG} color={Badge.color.GREEN} />),
                },
            ],
        },
    ],
};

export const marketsTable = {
    name: 'markets-table',
    head: [
        { title: 'Market' },
        { title: 'Currency' },
        { title: (<span>Volume <AngleDown /></span>) },
        { title: '% Change' },
        { title: 'Last price' },
        { title: '24HR High' },
        { title: '24HR Low' },
    ],
    bodyClass: 'table__body--text-left table__body--markets-table',
    headClass: 'table__head--text-left table__head--padding-bottom-35 table__head--markets-table',
    body: [
        {
            id: 1,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--padding-22-0 table__td--blue table__td--width-16',
                    body: (<span className="BTC">BTC-USDT</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine table__td--width-15',
                    body: (<span>Ethereum</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine table__td--width-13',
                    body: (<span>4285.161</span>),
                },
                {
                    tdClass: 'table__td--forest-green table__td--width-12',
                    body: (<span className="markets__change-column"><span>4.2 <ArrowUp /></span></span>),
                },
                {
                    tdClass: 'table__td--mulled-wine table__td--width-15',
                    body: (<span>0.11236836</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine table__td--width-15',
                    body: (<span>0.11419409</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.10676725</span>),
                },
            ],
        },
        {
            id: 2,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--padding-22-0 table__td--blue',
                    body: (<span className="BTC">BTC-IGNIS</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>Ignis</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>2583.749</span>),
                },
                {
                    tdClass: 'table__td--coral-red',
                    body: (<span className="markets__change-column"><span>-18.2 <ArrowDown /></span></span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.0004047</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.1142669</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.10000424</span>),
                },
            ],
        },
        {
            id: 3,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--padding-22-0 table__td--blue',
                    body: (<span className="BTC">BTC-ADA</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>Ada</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>1943.146</span>),
                },
                {
                    tdClass: 'table__td--coral-red',
                    body: (<span className="markets__change-column"><span>-1.1 <ArrowDown /></span></span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.0004865</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.11411594</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.106767128</span>),
                },
            ],
        },
        {
            id: 4,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--padding-22-0 table__td--blue',
                    body: (<span className="BTC">BTC-LSK</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>Lisk</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>1741.356</span>),
                },
                {
                    tdClass: 'table__td--coral-red',
                    body: (<span className="markets__change-column"><span>-10.2 <ArrowDown /></span></span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.0005063</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.0003246</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.10676733</span>),
                },
            ],
        },
        {
            id: 5,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--padding-22-0 table__td--blue',
                    body: (<span className="BTC">BTC-XLM</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>Lumen</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>1537.797</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span className="markets__change-column"><span>0.3 <ArrowUp /></span></span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.0003236</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.11154155</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.00676727</span>),
                },
            ],
        },
        {
            id: 6,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--padding-22-0 table__td--blue',
                    body: (<span className="BTC">BTC-XRP</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>Ripple</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>1192.681</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span className="markets__change-column"><span>1.5 <ArrowUp /></span></span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.11236237</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.1446272</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.10674245</span>),
                },
            ],
        },
        {
            id: 7,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--padding-22-0 table__td--blue',
                    body: (<span className="BTC">BTC-STEEM</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>Steem</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>1076.243</span>),
                },
                {
                    tdClass: 'table__td--coral-red',
                    body: (<span className="markets__change-column"><span>-4.2 <ArrowDown /></span></span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.0000627</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.1000309</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.10222525</span>),
                },
            ],
        },
        {
            id: 8,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--padding-22-0 table__td--blue',
                    body: (<span className="BTC">BTC-XVG</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>Verge</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>1034</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span className="markets__change-column"><span>0.1 <ArrowUp /></span></span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.1123996</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.11483409</span>),
                },
                {
                    tdClass: 'table__td--mulled-wine',
                    body: (<span>0.10553257</span>),
                },
            ],
        },
    ],
};

export const tradersTable = {
    name: 'traders-table',
    head: [
        { title: 'Nick' },
        { title: 'Followers' },
        { title: 'Last 7 days' },
        { title: 'Last 14 days' },
        { title: 'Last 30 days' },
        { title: 'Last 3 months' },
        { title: 'Last 6 months' },
        { title: 'All' },
    ],
    bodyClass: 'table__body--text-left table__body--traders-table',
    headClass: 'table__head--text-left table__head--padding-bottom-35 table__head--traders-table',
    body: [
        {
            id: 1,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--padding-15-0 table__td--mulled-wine table__td--font-size-18 table__td--width-31',
                    body: (
                        <div className="table--center-elem">
                            <span className="table__circle-img">
                                <CircleImage avatarImg={Avatar1} size={CircleImage.size.BIG} />
                            </span>
                            <span className="table__fullname">Emma May</span>
                            <Badge text="Lvl 1" color={Badge.color.GREEN} />
                        </div>
                    ),
                },
                {
                    tdClass: 'table__td--width-10',
                    body: (<span>325</span>),
                },
                {
                    tdClass: 'table__td--forest-green table__td--width-10',
                    body: (<span>+5%</span>),
                },
                {
                    tdClass: 'table__td--forest-green table__td--width-10',
                    body: (<span>+15%</span>),
                },
                {
                    tdClass: 'table__td--forest-green table__td--width-10',
                    body: (<span>+15%</span>),
                },
                {
                    tdClass: 'table__td--forest-green table__td--width-10',
                    body: (<span>+15%</span>),
                },
                {
                    tdClass: 'table__td--forest-green table__td--width-10',
                    body: (<span>+15%</span>),
                },
                {
                    tdClass: 'table__td--forest-green table__td--width-6',
                    body: (<span>+15%</span>),
                },
            ],
        },
        {
            id: 2,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--padding-15-0 table__td--mulled-wine table__td--font-size-18 table__td--width-31',
                    body: (
                        <div className="table--center-elem">
                            <span className="table__circle-img">
                                <CircleImage avatarImg={Avatar2} size={CircleImage.size.BIG} />
                            </span>
                            <span className="table__fullname">Andrew Philips</span>
                            <Badge text="Lvl 2" color={Badge.color.GREEN_BLUE} />
                        </div>
                    ),
                },
                {
                    tdClass: '',
                    body: (<span>248</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+5%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+13%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+11%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+12%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+16%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+15%</span>),
                },
            ],
        },
        {
            id: 3,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--padding-15-0 table__td--mulled-wine table__td--font-size-18 table__td--width-31',
                    body: (
                        <div className="table--center-elem">
                            <span className="table__circle-img">
                                <CircleImage avatarImg={Avatar3} size={CircleImage.size.BIG} />
                            </span>
                            <span className="table__fullname">Alice Mayers</span>
                            <Badge text="Lvl 3" color={Badge.color.BLUE} />
                        </div>
                    ),
                },
                {
                    tdClass: '',
                    body: (<span>150</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+4%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+12%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+10%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+9%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+10%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+14%</span>),
                },
            ],
        },
        {
            id: 4,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--padding-15-0 table__td--mulled-wine table__td--font-size-18 table__td--width-31',
                    body: (
                        <div className="table--center-elem">
                            <span className="table__circle-img">
                                <CircleImage avatarImg={Avatar4} size={CircleImage.size.BIG} />
                            </span>
                            <span className="table__fullname">Paul Miller</span>
                            <Badge text="Lvl 1" color={Badge.color.GREEN} />
                        </div>
                    ),
                },
                {
                    tdClass: '',
                    body: (<span>140</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+3%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+19%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+25%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+13%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+9%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+12%</span>),
                },
            ],
        },
        {
            id: 5,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--padding-15-0 table__td--mulled-wine table__td--font-size-18 table__td--width-31',
                    body: (
                        <div className="table--center-elem">
                            <span className="table__circle-img">
                                <CircleImage avatarImg={Avatar5} size={CircleImage.size.BIG} />
                            </span>
                            <span className="table__fullname">Peter Larsson</span>
                            <Badge text="Lvl 4" color={Badge.color.ROYAL_BLUE} />
                        </div>
                    ),
                },
                {
                    tdClass: '',
                    body: (<span>135</span>),
                },
                {
                    tdClass: 'table__td--coral-red',
                    body: (<span>-1%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+7%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+11%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+5%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+18%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+8%</span>),
                },
            ],
        },
        {
            id: 6,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--padding-15-0 table__td--mulled-wine table__td--font-size-18 table__td--width-31',
                    body: (
                        <div className="table--center-elem">
                            <span className="table__circle-img">
                                <CircleImage avatarImg={Avatar6} size={CircleImage.size.BIG} />
                            </span>
                            <span className="table__fullname">Andy Johhanson</span>
                            <Badge text="Lvl 5" color={Badge.color.LOGAN} />
                        </div>
                    ),
                },
                {
                    tdClass: '',
                    body: (<span>120</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+2%</span>),
                },
                {
                    tdClass: 'table__td--coral-red',
                    body: (<span>-2%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+12%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+10%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+8%</span>),
                },
                {
                    tdClass: 'table__td--forest-green',
                    body: (<span>+6%</span>),
                },
            ],
        },
    ],
};


/* eslint-enabled max-len */
