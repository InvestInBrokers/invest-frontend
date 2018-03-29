import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setModalStatus } from '../../modules/app/actions';
import PlainPagination from './Pagination';

const mapDispatchToProps = dispatch => ({
    onSetModalStatus(state) {
        dispatch(setModalStatus(state));
    },
});

const Pagination = withRouter(connect(null, mapDispatchToProps)(PlainPagination));
export default Pagination;
