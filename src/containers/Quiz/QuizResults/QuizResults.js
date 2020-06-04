import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import { connect } from 'react-redux';
import { Title, Button } from '../../../components/UI';
import globalStyles from '../../../assets/css/index.module.css';
import { Redirect } from 'react-router-dom';
import cx from 'classnames';
class QuizResults extends Component {

    renderResults = () => {
        const numberOfCorrectAnswers = this.props.results.filter(res => res.isAnswer).length;
        const congrats = numberOfCorrectAnswers === this.props.results.length ? <Title level='2'>YAY!</Title> : null;
        return (
            <div className={globalStyles.marginTop4}>{congrats} You gave <b>{numberOfCorrectAnswers}</b> correct answer{numberOfCorrectAnswers > 1 ? 's' : null} on <b>{this.props.results.length}</b> question{this.props.results.length > 1 ? 's' : null}</div>
        );
    }

    renderQuizResultsBlock = () => {
        const _classNames = cx(
            globalStyles.marginTop4,
            globalStyles.textCenter,
            globalStyles.marginAuto
        );
        if (!this.props.selectedQuiz) { return <Redirect to="/quiz" />; }

        return (
            <Aux>
                <Title level='1' variant='decorated' className={globalStyles.capitalize}>Finished ! {this.props.selectedQuiz.theme}</Title>
                <div className={_classNames}>
                    {this.renderResults()}
                    <Button className={globalStyles.marginTop4} clicked={() => this.props.history.replace('/quiz')} label="Go back to the Quiz list"/>
                </div>
            </Aux>
        );
    }
    render() { return this.renderQuizResultsBlock() }
}

const mapStateToProps = state => ({
    results: state.quiz.results,
    selectedQuiz: state.quiz.selectedQuiz
});

export default connect(mapStateToProps, null)(QuizResults);
