import { connect } from 'react-redux';

import { setModalStatus } from '../../modules/app/actions';
import PlainUnavailableFeature from './UnavailableFeature';

const mapDispatchToProps = dispatch => ({
    onSetModalStatus(state) {
        dispatch(setModalStatus(state));
    },
});

const UnavailableFeature = connect(null, mapDispatchToProps)(PlainUnavailableFeature);
export default UnavailableFeature;
