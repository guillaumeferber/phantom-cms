import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import * as classNames from './LoremIpsumOutput.css';
import Button from '../../../components/UI/Button/Button';
import { copyToClipboard } from '../../../store/utility';

const loremIpsumOutput = (props) => {

    return (
        <Aux>
                {props.input ? (
                <div className={classNames.LoremIpsumOutput}>
                    <Aux>
                        <Button clicked={() => copyToClipboard(props.input)} label="copy"/>
                        {props.input.split('\n\n').map((p, i) => ( <p key={i}>{p}</p> ))}
                    </Aux>
                </div>
                ) : null}
        </Aux>
     );
}

export default loremIpsumOutput;
