import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './tiles.scss';

const tilesSize = {
    ONE_X: 'tiles--1x',
    TWO_X: 'tiles--2x',
};

const Tiles = ({
    HeaderComponent, size, children, bottomText,
}) => {
    const className = classNames(
        'tiles',
        size,
    );

    return (
        <div className={className}>
            {HeaderComponent}
            <div className="tiles__content">
                {children}
            </div>
            {bottomText && (
                <div className="tiles__more">
                    {bottomText}
                </div>
            )}
        </div>
    );
};

Tiles.size = tilesSize;

Tiles.propTypes = {
    HeaderComponent: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    size: PropTypes.string.isRequired,
    bottomText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
};

Tiles.defaultProps = {
    bottomText: '',
};

export default Tiles;
