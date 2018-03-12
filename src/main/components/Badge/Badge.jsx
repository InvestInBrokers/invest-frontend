import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './badge.scss';

const badgeSize = {
    BIG: 'badge--big',
    NORMAL: 'badge--normal',
};

const badgeColor = {
    GREEN: 'badge--green',
    RED: 'badge--red',
    GREY: 'badge--grey',
    BLUE: 'badge--blue',
    GREEN_BLUE: 'badge--green-blue',
};

const Badge = ({ text, size, color }) => {
    const className = classNames(
        'badge',
        size,
        color,
    );

    return (
        <span className={className} >
            {text}
        </span>
    );
};

Badge.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
};

Badge.defaultProps = {
    size: badgeSize.NORMAL,
    color: badgeColor.GREEN,
};

Badge.size = badgeSize;
Badge.color = badgeColor;

export default Badge;
