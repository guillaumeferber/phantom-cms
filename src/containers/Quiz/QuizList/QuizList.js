import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/';
import { List, ListItem, Button } from '../../../components/UI';
import * as constants from '../../../store/constants/index';

class QuizList extends Component {
    renderButtonVariant = (quiz) => {
        const primaryVariant = constants.QUIZ_PROGRESS.FINISHED !== this.props.quizStatus ? 'link' : 'primary';
        return this.props.selectedQuiz && this.props.selectedQuiz.id === quiz.id ? primaryVariant : 'secondary';
    }
    render() {
        return (
        <List>
            {this.props.quiz.map((quiz, index) => {
                return (
                    <ListItem
                        key={quiz.name+index+quiz.id}>
                        <Button
                            variant={this.renderButtonVariant(quiz)}
                            clicked={() => this.props.selectQuiz(quiz.id)}>{quiz.theme}</Button>
                    </ListItem>
                )
            })}
        </List>
        );
    }
}
const mapStateToProps = state => ({
    quiz: state.quiz.quiz,
    selectedQuiz: state.quiz.selectedQuiz,
    quizStatus: state.quiz.status
});

const mapDispatchToProps = dispatch => ({
    selectQuiz: id => dispatch(actionCreators.selectQuiz(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
