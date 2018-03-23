import { createReducer } from 'redux-create-reducer';
import { set } from 'lodash/fp';

import { SET_LOCALE, SHOW_MODAL } from './actions';
import { defaultLocale } from './constants';

const App = {
    locale: defaultLocale,
    unavailableFeature: false,
    showModal: false,
};

export default createReducer(App, {
    [SET_LOCALE]: (state, { locale }) => set('locale', locale, state),
    [SHOW_MODAL]: (state, { status }) => set('showModal', status, state),
});
