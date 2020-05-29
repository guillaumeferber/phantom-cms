export {
    addNote,
    saveNote,
    selectNote,
    deleteNote
} from './notes/notes.actions';
export {
    increment,
    decrement,
    preset,
    start,
    stop
} from './timers/timers.actions';

export {
    generateParagraph,
    generateSentence,
    reset
} from './lorem/lorem.actions';

export {
    startQuiz,
    stopQuiz,
    resetQuiz,
    checkAnswer,
    selectQuiz,
    selectQuizList,
    selectQuizListAnswer,
    storeResults,
    deleteResults
} from './quiz/quiz.actions';
