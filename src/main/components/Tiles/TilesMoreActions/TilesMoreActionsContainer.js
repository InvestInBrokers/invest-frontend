import { connect } from 'react-redux';

import { setModalStatus } from '../../../modules/app/actions';
import PlainTilesMoreActions from './TilesMoreActions';

const mapDispatchToProps = dispatch => ({
    onSetModalStatus(state) {
        dispatch(setModalStatus(state));
    },
});

const TilesMoreActions = connect(null, mapDispatchToProps)(PlainTilesMoreActions);
export default TilesMoreActions;
