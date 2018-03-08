import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import avatar from '../../assets/images/avatar-example.jpg';

import './avatar-image.scss';

const avatarSize = {
    SMALL: 'avatar-img--small',
    BIG: 'avatar-img--big',
};

const AvatarImage = ({ size, avatarImg = avatar }) => {
    const className = classNames(
        'avatar-img',
        size,
    );

    return (
        <img className={className} src={avatarImg} alt="avatar" />
    );
};

AvatarImage.size = avatarSize;

AvatarImage.propTypes = {
    size: PropTypes.number.isRequired,
    avatarImg: PropTypes.shape.isRequired,
};

export default AvatarImage;
