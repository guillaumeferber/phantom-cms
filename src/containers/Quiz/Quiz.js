import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import * as cn from '../../assets/css/index.module.css';

class Quiz extends Component {
    render() {
        return (
            <Aux>
                <h1 className={cn.Title}>&nbsp;Quiz</h1>
            </Aux>
         );
    }
}

export default Quiz;
