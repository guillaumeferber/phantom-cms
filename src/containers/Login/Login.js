import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import * as cx from './Login.css';

class Login extends Component {
    render() {
        return (
            <Aux>
                <div className={cx.Login}>
                    <form noValidate onSubmit={this.onSubmitHandler}>
                        <div className={cx.formControl}>
                            <input
                            className={cx.Input}
                            type="email"
                            placeholder="Your email"
                            />
                        </div>
                        <div className={cx.formControl}>
                            <input
                            className={cx.Input}
                            type="password"
                            placeholder="Your password" />
                        </div>
                        <div className={cx.formControl}>
                            <button type="button" className={cx.Button}>Login</button>
                        </div>
                    </form>
                </div>
            </Aux>
         );
    }
}

export default Login;
