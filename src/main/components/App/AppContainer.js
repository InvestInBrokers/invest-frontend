import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getModalStatus } from '../../modules/app/selectors';
import PlainApp from './App';

const mapStateToProps = state => ({
    splashScreenOpened: getModalStatus(state),
});

const App = withRouter(connect(mapStateToProps)(PlainApp));
export default App;
