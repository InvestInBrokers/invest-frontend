import { combineReducers } from 'redux';

import appReducer from './app/reducer';
import { reducerKey as appReducerKey } from './app/constants';

const reducer = combineReducers({
    [appReducerKey]: appReducer,
});

export default reducer;
