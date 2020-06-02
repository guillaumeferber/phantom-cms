import React from 'react';

const customTag = (props) => {
    const CustomTag = `h${props.level}`
    return (
        <CustomTag className={props.className}>{props.children}</CustomTag>
     );
}

export default customTag;
