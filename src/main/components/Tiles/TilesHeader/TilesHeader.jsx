import React from 'react';
import PropTypes from 'prop-types';

import './tiles-header.scss';

const tilesSize = {
    ONE_X: 'tiles--1x',
    TWO_X: 'tiles--2x',
};

const TilesHeader = ({ title, actionComponent }) => {
    return (
        <div className="tiles-header">
            <div className="tiles-header__title">
                {title}
            </div>
            {actionComponent}
        </div>
    );
};

TilesHeader.size = tilesSize;

TilesHeader.propTypes = {
    title: PropTypes.string.isRequired,
    actionComponent: PropTypes.node,
};

TilesHeader.defaultProps = {
    actionComponent: false,
};

export default TilesHeader;
