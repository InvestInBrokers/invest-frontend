import { connect } from 'react-redux';

import { setModalStatus } from '../../modules/app/actions';
import PlainTiles from './Tiles';

const mapDispatchToProps = dispatch => ({
    onSetModalStatus(state) {
        dispatch(setModalStatus(state));
    },
});

const Tiles = connect(null, mapDispatchToProps)(PlainTiles);
export default Tiles;
