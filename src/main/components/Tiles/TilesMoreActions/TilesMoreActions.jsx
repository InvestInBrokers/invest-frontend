import React from 'react';
import PropTypes from 'prop-types';

import EllipsisV from '../../icons/EllipsisV';

import './tiles-more-actions.scss';

const TilesMoreActions = ({ onSetModalStatus }) => (
    <div className="tiles-more-actions" onClick={() => { onSetModalStatus(true); }}>
        <EllipsisV />
    </div>
);

TilesMoreActions.propTypes = {
    onSetModalStatus: PropTypes.func.isRequired,
};

export default TilesMoreActions;
