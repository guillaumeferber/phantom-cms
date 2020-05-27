import React, { useState } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../../components/UI/Button/Button';
import LoremIpsumControl from './LoremIpsumControl/LoremIpsumControl';
import * as cn from '../../../assets/css/index.module.css';

const LoremIpsumControls = props => {
    const [ paragraphs, setParagraphs ] = useState(0);
    const [ sentences, setSentences ] = useState(0);
    const inputConfig = {
        type: 'number',
        min: 0,
        max: 10
    }
    return (
        <Aux>
            <div className={[cn.flex, cn.alignItemsCenter, cn.justifyContentStart].join(' ')}>
                <LoremIpsumControl
                    elementConfig={ {...inputConfig, name: 'paragraphs', placeholder: 'Nbr de paragraphes' } }
                    changed={(e) => setParagraphs(+e.target.value)}/>
                <LoremIpsumControl
                    elementConfig={{...inputConfig,  name: 'sentences', placeholder: 'Nbr de phrases'}}
                    changed={(e) => setSentences(+e.target.value) }/>
                <Button
                    className={cn.floatRight}
                    disabled={paragraphs === 0 && 0 === sentences}
                    label="Generate"
                    variant="basic"
                    clicked={() => props.clicked({p: +paragraphs, s: +sentences})} />
            </div>
        </Aux>
     );
}

export default LoremIpsumControls;
