import React from 'react';
import PropTypes from 'prop-types';

import './badge.scss';

const Badge = ({ text }) => (
    <span className="badge">
        {text}
    </span>
);

Badge.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Badge;
