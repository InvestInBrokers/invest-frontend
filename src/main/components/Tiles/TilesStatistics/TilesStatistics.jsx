import React from 'react';

import CircleIcon from '../../icons/Circle';

import './tiles-statistics.scss';

const TilesStatistics = () => (
    <div className="tiles-statistics">
        <ul className="tiles-statistics__ul">
            <li className="tiles-statistics__li">
                <span className="tiles-statistics__circle tiles-statistics__circle--open">
                    <CircleIcon />
                </span>

                <span>Open</span>
            </li>
            <li className="tiles-statistics__li">
                <span className="tiles-statistics__circle tiles-statistics__circle--close">
                    <CircleIcon />
                </span>
                <span>Close</span>
            </li>
        </ul>
        <ul className="tiles-statistics__ul tiles-statistics__ul--periods">
            <li className="tiles-statistics__period tiles-statistics__period--active">Week</li>
            <li className="tiles-statistics__period">Month</li>
            <li className="tiles-statistics__period">Year</li>
        </ul>
    </div>
);

export default TilesStatistics;
