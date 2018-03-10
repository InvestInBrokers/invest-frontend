import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { map } from 'lodash';

import './table.scss';

const renderHeader = (header, name) =>
    map(header, ({ title }, index) => <th key={`${title}-${name}-${index}`}>{title}</th>);

const renderTd = (td, name) => (
    map(td, ({ tdClass, body }, index) => {
        const tdClassName = classNames(
            'table__td',
            tdClass,
        );

        return (
            <td key={`${index}--${name}`} className={tdClassName}>
                {body}
            </td>
        );
    })
);

const renderBody = (body, name) => (
    map(body, ({ trClass, columns, id }) => {
        const trClassName = classNames(
            'table__tr',
            trClass,
        );

        return (
            <tr key={`${id}-${name}`} className={trClassName}>
                {renderTd(columns, name)}
            </tr>
        );
    })
);

const Table = ({ head, body, name }) => (
    <table className="table">
        <thead className="table__header">
            <tr>
                {renderHeader(head, name)}
            </tr>
        </thead>
        <tbody className="table__body">
            {renderBody(body, name)}
        </tbody>
    </table>
);

Table.propTypes = {
    head: PropTypes.arrayOf(PropTypes.object).isRequired,
    body: PropTypes.arrayOf(PropTypes.object).isRequired,
    name: PropTypes.string.isRequired,
};

export default Table;
