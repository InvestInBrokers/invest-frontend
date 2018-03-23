import React from 'react';
import PropTypes from 'prop-types';

import Translate from '../../Translate';

import CircleIcon from '../../icons/Circle';

import './tiles-statistics.scss';

const TilesStatistics = ({ onSetModalStatus }) => (
    <div className="tiles-statistics">
        <ul className="tiles-statistics__ul">
            <li className="tiles-statistics__li">
                <span className="tiles-statistics__circle tiles-statistics__circle--open">
                    <CircleIcon />
                </span>
                <Translate value="common.open" />
            </li>
            <li className="tiles-statistics__li">
                <span className="tiles-statistics__circle tiles-statistics__circle--close">
                    <CircleIcon />
                </span>
                <Translate value="common.close" />
            </li>
        </ul>
        <ul
            onClick={() => { onSetModalStatus(true); }}
            className="tiles-statistics__ul tiles-statistics__ul--periods"
        >
            <li className="tiles-statistics__period tiles-statistics__period--active">
                <Translate value="periods.week" />
            </li>
            <li className="tiles-statistics__period">
                <Translate value="periods.month" />
            </li>
            <li className="tiles-statistics__period">
                <Translate value="periods.year" />
            </li>
        </ul>
    </div>
);

TilesStatistics.propTypes = {
    onSetModalStatus: PropTypes.func.isRequired,
};

export default TilesStatistics;
