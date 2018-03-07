// eslint-disable-next-line import/prefer-default-export
export const actionOf = reducerKey => name => `${reducerKey.toUpperCase()}_${name}`;
