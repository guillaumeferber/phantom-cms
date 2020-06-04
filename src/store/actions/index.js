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
    finishQuiz,
    resetQuiz,
    checkAnswer,
    selectQuiz,
    selectQuizList,
    selectQuizListAnswer
} from './quiz/quiz.actions';
