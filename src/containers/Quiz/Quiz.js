import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import globalStyles from '../../assets/css/index.module.css';
import {Button, Title, List, ListItem} from '../../components/UI/';
import QuizQuestionList from './QuizQuestionList/QuizQuestionList';
import * as actionCreators from '../../store/actions/';
import cx from 'classnames';
import * as constants from '../../store/constants/index';
class Quiz extends Component {

    componentDidMount() {
        this.props.resetQuiz();
    }

    renderQuizList = () => (
        <List>
            {this.props.quiz.map((quiz, index) => {
                return (
                    <ListItem
                        key={quiz.name+index+quiz.id}>
                        <Button
                            variant={this.props.selectedQuiz.id === quiz.id ? 'primary' : 'secondary'}
                            clicked={() => this.props.selectQuiz(quiz.id)}>{quiz.theme}</Button>
                    </ListItem>
                )
            })}
        </List>
    );

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
                return (
                    <div className={cn}>
                        <Title level="3">Quiz finished !</Title>
                        {JSON.stringify(this.props.results)}
                    </div>
                );
            default:
                return (
                    <div className={cn}><Button label="Start quiz" clicked={this.props.startQuiz}/></div>
                );
        }
    }
    render() {
        const _classNames = cx(
            globalStyles.marginAuto,
            globalStyles.textCenter,
            globalStyles.marginTop8
        );

        return (
            <Aux>
                <Title level='1' variant='decorated' className={globalStyles.capitalize}>Your quiz:&nbsp;{this.props.selectedQuiz.theme}</Title>
                {this.renderQuizList()}
                {this.renderQuestionBody(_classNames)}
            </Aux>
         );
    }
}
const mapStateToProps = state => ({
    quiz: state.quiz.quiz,
    selectedQuiz: state.quiz.selectedQuiz,
    quizStatus: state.quiz.quizStatus,
    selectedQuizList: state.quiz.selectedQuizList,
    selectedQuizListAnswer: state.quiz.selectedQuizListAnswer,
    results: state.quiz.results,
    error: state.quiz.error
});

const mapDispatchToProps = dispatch => ({
    startQuiz: () => dispatch(actionCreators.startQuiz()),
    stopQuiz: () => dispatch(actionCreators.stopQuiz()),
    resetQuiz: () => dispatch(actionCreators.resetQuiz()),
    selectQuiz: id => dispatch(actionCreators.selectQuiz(id)),
    selectQuizList: id => dispatch(actionCreators.selectQuizList(id)),
    selectQuizListAnswer: value => dispatch(actionCreators.selectQuizListAnswer(value)),
    checkAnswer: value => dispatch(actionCreators.checkAnswer(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
