import React from 'react';
import Aux from '../../../../hoc/Aux/Aux';
import Input from '../../../../components/UI/Input/Input';

const loremIpsumControl = props => {
    return (
        <Aux>
            <Input
                elementConfig={props.elementConfig}
                elementType="input"
                label={props.label}
                changed={props.changed}
                blurred={props.blurred}/>
        </Aux>
     );
}

export default loremIpsumControl;
