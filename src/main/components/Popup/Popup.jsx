import React from 'react';
import PropTypes from 'prop-types';

import './popup.scss';

const Popup = ({ children }) => (
    <div className="popup">
        <div className="popup__content">
            {children}
        </div>
    </div>
);

Popup.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Popup;
