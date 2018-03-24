import React from 'react';
import PropTypes from 'prop-types';

import './page-title.scss';

const PageTitle = ({ title, children }) => (
    <div className="page-title">
        <div className="page-title__title">
            {title}
        </div>
        {children}
    </div>
);

PageTitle.defaultProps = {
    children: null,
};

PageTitle.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]).isRequired,
    children: PropTypes.node,
};

export default PageTitle;
