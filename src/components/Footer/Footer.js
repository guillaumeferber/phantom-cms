import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import * as cx from './Footer.css';

const footer = (props) => {
    const date = new Date();
    return (
        <Aux>
            <footer className={[cx.Footer, props.open ? cx.Open : null].join(' ')}>
                <div className={cx.Footer__content}>
                    <p>&copy;&nbsp;<span>{date.getFullYear()}</span>&nbsp;Guillaume Ferber </p>
                </div>
            </footer>
        </Aux>
     );
}

export default footer;
