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

const Table = ({ head, body, name, bodyClass, headClass }) => {
    const tHeadClassName = classNames(
        'table__head',
        headClass,
    );
    const tBodyClassName = classNames(
        'table__body',
        bodyClass,
    );
    return (
        <table className="table">
            <thead className={tHeadClassName}>
                <tr>
                    {renderHeader(head, name)}
                </tr>
            </thead>
            <tbody className={tBodyClassName}>
                {renderBody(body, name)}
            </tbody>
        </table>
    );
}

Table.propTypes = {
    head: PropTypes.arrayOf(PropTypes.object).isRequired,
    body: PropTypes.arrayOf(PropTypes.object).isRequired,
    name: PropTypes.string.isRequired,
    bodyClass: PropTypes.string,
    headClass: PropTypes.string,
};

Table.defaultProps = {
    bodyClass: '',
    headClass: '',
};

export default Table;
