import React, { Component } from 'react';
import LoremIpsumOutput from './LoremIpsumOutput/LoremIpsumOutput';
import Aux from '../../hoc/Aux/Aux';
import LoremIpsumControls from './LoremIpsumControls/LoremIpsumControls';
import * as actionCreator from '../../store/actions/';
import { connect } from 'react-redux';

class LoremIpsumGenerator extends Component {

    controlsClickedHandler = (e) => {
        if (0 !== e.p && 0 === e.s) {
            this.props.generateParagraph(e.p);
        }
        if(0 !== e.s) {
            if (0 !== e.p) { this.props.generateParagraph(0); }
            this.props.generateSentence(e.s);
        }
    }


    render() {
        return (
            <Aux>
                <h1>Lorem Ipsum Generator</h1>
                {/* controls */}
                <LoremIpsumControls clicked={(e) => this.controlsClickedHandler(e)}/>
                {/* output */}
                <LoremIpsumOutput input={this.props.paragraph || this.props.sentence}/>
            </Aux>
        )
    }
}

const mapStateToProps = state => ({
    paragraph: state.lorem.paragraph,
    sentence: state.lorem.sentence,
});

const mapDispatchToProps = dispatch => ({
    generateParagraph: (value) => dispatch(actionCreator.generateParagraph(value)),
    generateSentence: (value) => dispatch(actionCreator.generateSentence(value))
})
export default connect(mapStateToProps, mapDispatchToProps)(LoremIpsumGenerator);
