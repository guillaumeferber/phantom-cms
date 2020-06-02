import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import globalStyles from '../../assets/css/index.module.css';
import {Button, Title, List, ListItem} from '../../components/UI/';
import QuizQuestionList from './QuizQuestionList/QuizQuestionList';
import * as actionCreators from '../../store/actions/';
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
                            clicked={() => this.props.selectQuiz(quiz.id)}>{quiz.name}</Button>
                    </ListItem>
                )
            })}
        </List>
    );

    renderQuizQuestionList = () => (
        <div>
            <QuizQuestionList
                disabled={this.props.quizStatus && this.props.quizStatus.hasAnswered}
                quizId={this.props.selectedQuiz.id}
                questionList={this.props.selectedQuizList}
                answerHandler={(e) => this.props.selectQuizListAnswer(e)} />
            <Button
                disabled={!this.props.selectedQuizListAnswer}
                label={this.props.error.status ? 'Continue' : 'Check answer'}
                variant={this.props.error.status ? 'warning' : 'primary'}
                clicked={() => this.props.checkAnswer(this.props.selectedQuizListAnswer)} />
        </div>
    );

    render() {

        return (
            <Aux>
                <Title level='1' className={globalStyles.capitalize}>Your quiz:&nbsp;{this.props.selectedQuiz.name}</Title>
                {this.renderQuizList()}
                {this.props.quizStarted ? this.renderQuizQuestionList() : <Button label="Start quiz" clicked={this.props.startQuiz}/>}
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
    selectQuizListAnswer: value => dispatch(actionCreators.selectQuizListAnswer(value)),
    checkAnswer: value => dispatch(actionCreators.checkAnswer(value)),
    storeResults: value => dispatch(actionCreators.storeResults(value)),
    deleteResults: id => dispatch(actionCreators.deleteResults(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
