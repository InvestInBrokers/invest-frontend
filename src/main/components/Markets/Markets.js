import React from 'react';
import './markets.scss';

import Translate from '../Translate';
import PageTitle from '../PageTitle';
import Table from '../Table';

import { marketsTable } from '../../../../mocks/tables';

const Markets = () => (
    <div className="markets">
        <PageTitle title={<Translate value="header.menu.markets" />} />
        <div className="markets__content">
            <Table
                name={marketsTable.name}
                head={marketsTable.head}
                body={marketsTable.body}
                bodyClass={marketsTable.bodyClass}
                headClass={marketsTable.headClass}
            />
            <div className="markets__pagination">
                <div className="pagination">
                    <ul className="pagination__list">
                        <li className="pagination__item">
                            <span>
                                Prev
                            </span>
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
                            <span>
                                Next
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default Markets;
