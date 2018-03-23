import { reducerKey } from './constants';
import { selectorOf } from '../../utils/selectors';

const select = selectorOf(reducerKey);

// eslint-disable-next-line import/prefer-default-export
export const getLocale = select('locale');
export const getModalStatus = select('showModal');
