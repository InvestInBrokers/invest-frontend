import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import avatar from '../../assets/images/avatar-example.jpg';

import './circle-image.scss';

const avatarSize = {
    SMALL: 'circle-img--small',
    BIG: 'circle-img--big',
};

const CircleImage = ({ size, avatarImg = avatar }) => {
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
    ]),
};

CircleImage.defaultProps = {
    avatarImg: avatar,
};

export default CircleImage;
