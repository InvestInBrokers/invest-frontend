import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setModalStatus } from '../../modules/app/actions';
import PlainHeader from './Header';

const mapDispatchToProps = dispatch => ({
    onSetModalStatus(state) {
        dispatch(setModalStatus(state));
    },
});

const Header = withRouter(connect(null, mapDispatchToProps)(PlainHeader));
export default Header;
