import { connect } from 'react-redux';

import { getModalStatus } from '../../modules/app/selectors';
import PlainApp from './App';

const mapStateToProps = state => ({
    splashScreenOpened: getModalStatus(state),
});

const App = connect(mapStateToProps)(PlainApp);
export default App;
