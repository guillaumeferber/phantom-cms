import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import globalStyles from '../../assets/css/index.module.css';
import { Button, Title } from '../../components/UI/';
import QuizQuestionList from './QuizQuestionList/QuizQuestionList';
import * as actionCreators from '../../store/actions/';
import cx from 'classnames';
import * as constants from '../../store/constants/index';
import QuizList from './QuizList/QuizList';
import { Redirect } from 'react-router-dom';
class Quiz extends Component {
    componentDidMount() {
        this.props.resetQuiz();
    }

    renderInitalQuestionButton = () => (
        <Button
            className={globalStyles.floatRight}
            label='Next'
            variant='basic'
            clicked={() => this.props.selectQuizList(this.props.selectedQuizList.id)} />
    );

    renderAnsweredQuestionButton = () => (
        <Button
            disabled={!this.props.selectedQuizListAnswer}
            className={globalStyles.floatRight}
            label='Submit answer'
            variant='basic'
            clicked={() => this.props.checkAnswer(this.props.selectedQuizListAnswer)} />
    );

    renderQuizQuestionList = () => (
        <QuizQuestionList
            hasAnswered={this.props.quizStatus && this.props.quizStatus.hasAnswered}
            quizId={this.props.selectedQuiz.id}
            questionList={this.props.selectedQuizList}
            answerHandler={(e) => this.props.selectQuizListAnswer(e)} />
    );

    renderQuestionBody = (cn) => {
        switch(this.props.quizStatus.progress) {
            case constants.QUIZ_PROGRESS.STARTED:
            case constants.QUIZ_PROGRESS.IN_PROGRESS:
                return (
                    <div>
                        {this.renderQuizQuestionList()}
                        {!this.props.quizStatus.hasAnswered ? this.renderAnsweredQuestionButton() : this.renderInitalQuestionButton()}
                    </div>
                );
            case constants.QUIZ_PROGRESS.FINISHED:
                return <Redirect to="/quiz-results" />;
            default:
                return (
                    this.props.selectedQuiz && <div className={cn}><Button label="Start quiz" clicked={this.props.startQuiz}/></div>
                );
        }
    }

    renderQuizTitle = () => {
        const titleLabel = this.props.selectedQuiz ? `Your quiz: ${this.props.selectedQuiz.theme}` : 'Choose a quiz !';
        return <Title level='1' variant='decorated' className={globalStyles.capitalize}>{titleLabel}</Title>
    };

    render() {

        return (
            <Aux>
                {this.renderQuizTitle()}
                <QuizList />
                {this.renderQuestionBody(cx(
                    globalStyles.marginAuto,
                    globalStyles.textCenter,
                    globalStyles.marginTop8
                ))}
            </Aux>
         );
    }
}
const mapStateToProps = state => ({
    selectedQuiz: state.quiz.selectedQuiz,
    quizStatus: state.quiz.quizStatus,
    selectedQuizList: state.quiz.selectedQuizList,
    selectedQuizListAnswer: state.quiz.selectedQuizListAnswer,
    results: state.quiz.results,
    error: state.quiz.error
});

const mapDispatchToProps = dispatch => ({
    startQuiz: () => dispatch(actionCreators.startQuiz()),
    resetQuiz: () => dispatch(actionCreators.resetQuiz()),
    selectQuizList: id => dispatch(actionCreators.selectQuizList(id)),
    selectQuizListAnswer: value => dispatch(actionCreators.selectQuizListAnswer(value)),
    checkAnswer: value => dispatch(actionCreators.checkAnswer(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
