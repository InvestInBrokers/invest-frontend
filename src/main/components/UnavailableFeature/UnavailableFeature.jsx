import React from 'react';
import PropTypes from 'prop-types';

import Popup from '../Popup';

import './unavailable-feature.scss';

const UnavailableFeature = ({ onSetModalStatus }) => (
    <Popup>
        <div className="unavailable-feature">
            <div
                className="unavailable-feature__close"
                onClick={() => { onSetModalStatus(false); }}
            >
                <span>X</span>
            </div>
            <span>Ta funkcja jest niedostępna</span>
        </div>
    </Popup>
);

UnavailableFeature.propTypes = {
    onSetModalStatus: PropTypes.func.isRequired,
};

export default UnavailableFeature;
