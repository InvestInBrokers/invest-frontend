import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './circle-image.scss';

const avatarSize = {
    SMALL: 'circle-img--small',
    BIG: 'circle-img--big',
};

const CircleImage = ({ size, avatarImg }) => {
    const className = classNames(
        'circle-img',
        size,
    );

    return (
        <img className={className} src={avatarImg} alt="avatar" />
    );
};

CircleImage.size = avatarSize;

CircleImage.propTypes = {
    size: PropTypes.string.isRequired,
    avatarImg: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
    ]).isRequired,
};

export default CircleImage;
