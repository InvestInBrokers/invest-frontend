import { connect } from 'react-redux';

import { setModalStatus } from '../../../modules/app/actions';
import PlainTilesStatistics from './TilesStatistics';

const mapDispatchToProps = dispatch => ({
    onSetModalStatus(state) {
        dispatch(setModalStatus(state));
    },
});

const TilesStatistics = connect(null, mapDispatchToProps)(PlainTilesStatistics);
export default TilesStatistics;
