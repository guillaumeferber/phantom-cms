import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import globalStyles from '../../assets/css/index.module.css';
import {Button, Title, List, ListItem} from '../../components/UI/';
import QuizQuestionList from './QuizQuestionList/QuizQuestionList';
import * as actionCreators from '../../store/actions/';
import cx from 'classnames';
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

    renderQuizQuestionList = () => (
        <div>
            <QuizQuestionList
                hasAnswered={this.props.quizStatus && this.props.quizStatus.hasAnswered}
                quizId={this.props.selectedQuiz.id}
                questionList={this.props.selectedQuizList}
                answerHandler={(e) => this.props.selectQuizListAnswer(e)} />
            {!this.props.quizStatus.hasAnswered ? (
                <Button
                    disabled={!this.props.selectedQuizListAnswer}
                    className={globalStyles.floatRight}
                    label='Submit answer'
                    variant='basic'
                    clicked={() => this.props.checkAnswer(this.props.selectedQuizListAnswer)} />
            ) : (
                <Button
                    className={globalStyles.floatRight}
                    label='Next'
                    variant='basic'
                    clicked={() => this.props.selectQuizList(this.props.selectedQuizList.id)} />
            )}

        </div>
    );

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
                {this.props.quizStarted ? this.renderQuizQuestionList() : <div className={_classNames}><Button label="Start quiz" clicked={this.props.startQuiz}/></div>}
            </Aux>
         );
    }
}
const mapStateToProps = state => ({
    quiz: state.quiz.quiz,
    quizStarted: state.quiz.quizStarted,
    selectedQuiz: state.quiz.selectedQuiz,
    quizStatus: state.quiz.quizStatus,
    selectedQuizList: state.quiz.selectedQuizList,
    selectedQuizListAnswer: state.quiz.selectedQuizListAnswer,
    error: state.quiz.error
});

const mapDispatchToProps = dispatch => ({
    startQuiz: () => dispatch(actionCreators.startQuiz()),
    stopQuiz: () => dispatch(actionCreators.stopQuiz()),
    resetQuiz: () => dispatch(actionCreators.resetQuiz()),
    selectQuiz: id => dispatch(actionCreators.selectQuiz(id)),
    selectQuizList: id => dispatch(actionCreators.selectQuizList(id)),
    selectQuizListAnswer: value => dispatch(actionCreators.selectQuizListAnswer(value)),
    checkAnswer: value => dispatch(actionCreators.checkAnswer(value)),
    storeResults: value => dispatch(actionCreators.storeResults(value)),
    deleteResults: id => dispatch(actionCreators.deleteResults(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
