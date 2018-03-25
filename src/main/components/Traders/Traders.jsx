import React from 'react';

import Translate from '../Translate';
import PageTitle from '../PageTitle';
import Table from '../Table';
import Pagination from '../Pagination';

import { tradersTable } from '../../../../mocks/tables';

import './traders.scss';

const Traders = () => (
    <div className="traders">
        <PageTitle title={<Translate value="common.successful_traders" />} />
        <div className="traders__content">
            <Table
                name={tradersTable.name}
                head={tradersTable.head}
                body={tradersTable.body}
                bodyClass={tradersTable.bodyClass}
                headClass={tradersTable.headClass}
            />
            <div className="traders__pagination">
                <Pagination />
            </div>
        </div>
    </div>
);

export default Traders;
