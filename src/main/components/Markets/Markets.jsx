import React from 'react';

import Translate from '../Translate';
import PageTitle from '../PageTitle';
import Table from '../Table';
import Pagination from '../Pagination';

import { marketsTable } from '../../../../mocks/tables';

import './markets.scss';

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
                <Pagination />
            </div>
        </div>
    </div>
);

export default Markets;
