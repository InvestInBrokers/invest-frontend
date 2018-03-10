import React from 'react';
import CircleImage from '../src/main/components/CircleImage';
import Badge from '../src/main/components/Badge';

export const successfulTradersTable = {
    name: 'successful-traders-table',
    head: [{ title: '' }, { title: 'Followers' }, { title: 'Last 30 days' }],
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
                                <CircleImage size={CircleImage.size.SMALL} />
                            </span>
                            <span className="table__fullname">Nicolas May</span>
                            <Badge text="Lvl 1" />
                        </div>
                    ),
                },
                {
                    tdClass: '',
                    body: (<span>222</span>),
                },
                {
                    tdClass: 'table__td--green',
                    body: (<span>+10%</span>),
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
                                <CircleImage size={CircleImage.size.SMALL} />
                            </span>
                            <span className="table__fullname">Nicolas May</span>
                            <Badge text="Lvl 1" />
                        </div>
                    ),
                },
                {
                    tdClass: '',
                    body: (<span>222</span>),
                },
                {
                    tdClass: 'table__td--green',
                    body: (<span>+10%</span>),
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
                                <CircleImage size={CircleImage.size.SMALL} />
                            </span>
                            <span className="table__fullname">Nicolas May</span>
                            <Badge text="Lvl 1" />
                        </div>
                    ),
                },
                {
                    tdClass: '',
                    body: (<span>222</span>),
                },
                {
                    tdClass: 'table__td--green',
                    body: (<span>+10%</span>),
                },
            ],
        },
    ],
};

export const depositTable = {
    name: 'deposit-table',
    head: [{ title: '' }, { title: '' }],
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
                                <CircleImage size={CircleImage.size.SMALL} />
                            </span>
                            <span className="BTC">BTC</span>
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
                                <CircleImage size={CircleImage.size.SMALL} />
                            </span>
                            <span className="BTC">BTC</span>
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
            id: 3,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--mulled-wine table__td--text-left',
                    body: (
                        <div className="table--center-elem">
                            <span className="table__circle-img">
                                <CircleImage size={CircleImage.size.SMALL} />
                            </span>
                            <span className="BTC">BTC</span>
                        </div>
                    ),
                },
                {
                    tdClass: '',
                    body: (<span>0.51</span>),
                },
            ],
        },
    ],
};

export const yourtradesTable = {
    name: 'your-trades-table',
    head: [{ title: '' }, { title: '' }, { title: '' }],
    body: [
        {
            id: 1,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--big-padding table__td--mulled-wine table__td--text-left table__td--width-20',
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
                    body: (<Badge text="2.02.2018" />),
                },
            ],
        },
        {
            id: 2,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--big-padding table__td--mulled-wine table__td--text-left table__td--width-20',
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
                    body: (<Badge text="2.02.2018" />),
                },
            ],
        },
        {
            id: 3,
            trClass: '',
            columns: [
                {
                    tdClass: 'table__td--big-padding table__td--mulled-wine table__td--text-left table__td--width-20',
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
                    body: (<Badge text="2.02.2018" />),
                },
            ],
        },
    ],
};
