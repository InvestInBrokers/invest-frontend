import React from 'react';
import PropTypes from 'prop-types';

import Translate from '../Translate';

import './pagination.scss';

const Traders = ({ onSetModalStatus }) => (
    <div className="pagination">
        <ul className="pagination__list" onClick={() => { onSetModalStatus(true); }}>
            <li className="pagination__item">
                <Translate value="common.prev" />
            </li>
            <li className="pagination__item">
                <span>1</span>
            </li>
            <li className="pagination__item pagination__item--active">
                <span>2</span>
            </li>
            <li className="pagination__item">
                <span>3</span>
            </li>
            <li className="pagination__item">
                <span>4</span>
            </li>
            <li className="pagination__item">
                <span>5</span>
            </li>
            <li className="pagination__item pagination__item--dots">
                <span>...</span>
            </li>
            <li className="pagination__item">
                <span>24</span>
            </li>
            <li className="pagination__item">
                <Translate value="common.next" />
            </li>
        </ul>
    </div>
);

Traders.propTypes = {
    onSetModalStatus: PropTypes.func.isRequired,
};

export default Traders;
