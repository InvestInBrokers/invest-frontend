import React from 'react';
import CircleImage from '../src/main/components/CircleImage';
import Badge from '../src/main/components/Badge';

import Avatar1 from '../src/main/assets/images/avatar2.jpg';
import Avatar2 from '../src/main/assets/images/avatar3.jpg';
import Avatar3 from '../src/main/assets/images/avatar_demo_mo.jpg';
import Btc from '../src/main/assets/images/BTC.png';
import Usdt from '../src/main/assets/images/usdt.png';
import Eth from '../src/main/assets/images/eth.jpg';

export const successfulTradersTable = {
    name: 'successful-traders-table',
    head: [{ title: '' }, { title: 'Followers' }, { title: 'Last 30 days' }],
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
                            <span className="table__fullname">Nicolas May</span>
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
                            <span className="table__fullname">Anthony Mayers</span>
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
                    tdClass: 'table__td--big-padding table__td--mulled-wine table__td--text-left table__td--width-15 table__td--font-size-12',
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
                    tdClass: 'table__td--big-padding table__td--mulled-wine table__td--text-left table__td--width-15 table__td--font-size-12',
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
                    tdClass: 'table__td--big-padding table__td--mulled-wine table__td--text-left table__td--width-15 table__td--font-size-12',
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
