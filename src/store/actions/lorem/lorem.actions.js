import * as actionTypes from './lorem.actionTypes';

export const generateParagraph = value => ({
    type: actionTypes.GENERATE_PARAGRAPH,
    payload: { value: value }
});

export const generateSentence = value => ({
    type: actionTypes.GENERATE_SENTENCE,
    payload: { value: value }
});

export const reset = () => ({
    type: actionTypes.RESET
});
