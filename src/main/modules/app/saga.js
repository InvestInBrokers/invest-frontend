import { fork, take } from 'redux-saga/effects';
import { END } from './actions';


function* watchApp() {
    yield take(END);
}

function* saga() {
    yield fork(watchApp);
}

export default saga;
