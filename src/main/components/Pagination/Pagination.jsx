import React from 'react';

import Translate from '../Translate';

import './pagination.scss';

const Traders = () => (
    <div className="pagination">
        <ul className="pagination__list">
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

export default Traders;
