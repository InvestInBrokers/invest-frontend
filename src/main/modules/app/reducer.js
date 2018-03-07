import { createReducer } from 'redux-create-reducer';
import { set } from 'lodash/fp';

import { SET_LOCALE } from './actions';
import { defaultLocale } from './constants';

const App = {
    locale: defaultLocale,
};

export default createReducer(App, {
    [SET_LOCALE]: (state, { locale }) => set('locale', locale, state),
});
