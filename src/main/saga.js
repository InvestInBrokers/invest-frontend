import { fork, cancel, take } from 'redux-saga/effects';

import appSaga from './modules/app/saga';

import { END } from './modules/app/actions';

/**
 * Main saga combiner
 * @return {undefined}
 */
function* saga() {
    const tasks = yield [
        fork(appSaga),
        // add other sagas here when needed
    ];
    yield take(END);

    for (let i = 0; i < tasks.length; i += 1) {
        yield cancel(tasks[i]);
    }
}

export default saga;
