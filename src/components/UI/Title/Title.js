import React from 'react';

const title = (props) => {
    const CustomTag = `h${props.level}`;
    return (
        <CustomTag>{props.children}</CustomTag>
     );
}

export default title;
