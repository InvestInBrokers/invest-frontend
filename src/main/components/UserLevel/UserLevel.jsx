import React from 'react';
import PropTypes from 'prop-types';

import './user-level.scss';

const UserLevel = ({ level }) => (
    <span className="user-level">
        Lvl {level}
    </span>
);

UserLevel.propTypes = {
    level: PropTypes.number.isRequired,
};

export default UserLevel;
