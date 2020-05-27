import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import * as cn from '../../assets/css/index.module.css';

class ToDo extends Component {
    state = {  }
    render() {
        return (
            <Aux>
                <h1 className={cn.Title}>&nbsp;To Do</h1>
            </Aux>
         );
    }
}

export default ToDo;
