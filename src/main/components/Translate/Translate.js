import PropTypes from 'prop-types';
import React from 'react';
import { get, map, remove, omit, keys, last } from 'lodash';

import translations, { defaultLocale } from '../../languages';

const propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ])),
    locale: PropTypes.string,
};

const translationObject = (isVariable = false) => ({
    isVariable,
    value: '',
});

export const replaceVariables = (translation, replaces = {}) => {
    const translationArray = [translationObject()];

    let index = 0;
    while (index < translation.length) {
        const char = translation[index];
        if (char === '\\') {
            const nextChar = translation[index + 1];
            last(translationArray).value += nextChar;
            index += 2;
        } else if (char === '{') {
            translationArray.push(translationObject(true));
            index += 1;
        } else if (char === '}') {
            translationArray.push(translationObject());
            index += 1;
        } else {
            last(translationArray).value += char;
            index += 1;
        }
    }

    remove(translationArray, elem => elem.value === '');
    return map(translationArray, ({ isVariable, value }) =>
        (isVariable && (replaces[value] !== null && replaces[value] !== undefined) ? replaces[value] : value));
};


const getTranslation = (key, locale, translateVariables) => {
    const translation = get(translations[locale], key);
    if (translation !== undefined && translation !== null) {
        return replaceVariables(translation, translateVariables);
    }
    return [<span style={{ color: 'red' }}>{key}</span>];
};

const getTranslateVariables = props => omit(props, keys(propTypes));

const Translate = (props) => {
    const translation = getTranslation(props.value, props.locale, getTranslateVariables(props));
    return (
        <span className={props.className} style={props.style}>
            {map(translation, (elem, index) => <span key={index}>{elem}</span>)}
        </span>
    );
};

Translate.propTypes = propTypes;

Translate.defaultProps = {
    className: null,
    style: {},
    locale: defaultLocale,
};

export default Translate;
