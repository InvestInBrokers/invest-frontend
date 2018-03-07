import { getOr } from 'lodash/fp';

/* eslint-disable import/prefer-default-export */
export const selectorOf = reducerKey => (
    (selector = [], defaultValue = undefined) => state => (
        getOr(defaultValue, [reducerKey].concat(selector), state)
    )
);
/* eslint-enable import/prefer-default-export */
