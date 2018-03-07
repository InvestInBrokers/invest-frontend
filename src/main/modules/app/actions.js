import { reducerKey } from './constants';
import { actionOf } from '../../utils/actions';

const action = actionOf(reducerKey);

export const SET_LOCALE = action('SET_LOCALE');
export const END = action('END');

export const setLocale = locale => ({
    type: SET_LOCALE,
    locale,
});
