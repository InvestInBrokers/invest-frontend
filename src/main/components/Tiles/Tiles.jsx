import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './tiles.scss';

const tilesSize = {
    ONE_X: 'tiles--1x',
    TWO_X: 'tiles--2x',
};

const Tiles = ({
    HeaderComponent, size, children, bottomText, onSetModalStatus,
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
                <div
                    onClick={() => { onSetModalStatus(true); }}
                    className="tiles__more"
                >
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
    onSetModalStatus: PropTypes.func.isRequired,
};

Tiles.defaultProps = {
    bottomText: '',
};

export default Tiles;
