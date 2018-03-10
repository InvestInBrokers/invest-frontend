import React from 'react';
import PropTypes from 'prop-types';

import './circle-statistic.scss';

const CircleStatistic = ({ percent }) => (
    <div className="circle-statistic">
        <div className="circle-statistic__content">
            {percent}
        </div>
    </div>
);

CircleStatistic.propTypes = {
    percent: PropTypes.string.isRequired,
};

export default CircleStatistic;
