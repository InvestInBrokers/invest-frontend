import { connect } from 'react-redux';

import { setModalStatus } from '../../modules/app/actions';
import PlainHeader from './Header';

const mapDispatchToProps = dispatch => ({
    onSetModalStatus(state) {
        dispatch(setModalStatus(state));
    },
});

const Header = connect(null, mapDispatchToProps)(PlainHeader);
export default Header;
