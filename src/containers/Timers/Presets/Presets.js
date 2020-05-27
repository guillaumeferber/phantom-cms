import React from 'react';
import Button from '../../../components/UI/Button/Button';

const presets = (props) => {
    return (
        props.list.map((item, idx) => (
            <Button
                key={idx + '_' + item.value}
                label={item.name}
                variant="warning"
                clicked={() => props.clicked(item.value)} />
        ))
     );
}

export default presets;
