import * as actionTypes from '../../actions/lorem/lorem.actionTypes';
import { updateObject, paragraphs, sentences  } from '../../utility';

const initialState = {
    paragraph: 0,
    sentence: 0,
    data: null,
    config: {
        words: ["ad", "adipisicing", "aliqua", "aliquip", "amet", "anim", "aute", "cillum", "commodo", "consectetur", "consequat", "culpa", "cupidatat", "deserunt", "do", "dolor", "dolore", "duis", "ea", "eiusmod", "elit", "enim", "esse", "est", "et", "eu", "ex", "excepteur", "exercitation", "fugiat", "id", "in", "incididunt", "ipsum", "irure", "labore", "laboris", "laborum", "Lorem", "magna", "minim", "mollit", "nisi", "non", "nostrud", "nulla", "occaecat", "officia", "pariatur", "proident", "qui", "quis", "reprehenderit", "sint", "sit", "sunt", "tempor", "ullamco", "ut", "velit", "veniam", "voluptate"],
        minWords: 5,
        maxWords: 15
    }
};

const generateParagraph = (state, action) => updateObject(state, { paragraph: paragraphs(action.payload.value, state.config) });
const generateSentence = (state, action) => updateObject(state, { sentence: sentences(action.payload.value, state.config) });

export const loremReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GENERATE_PARAGRAPH: return generateParagraph(state, action);
        case actionTypes.GENERATE_SENTENCE: return generateSentence(state, action);
        default: return state;
    }
}

export default loremReducer;
