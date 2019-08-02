import React from 'react';

const validationComponent = (props) => {
    let validationText = 'Text too short';
    if(props.txtLength >= 5)
        validationText = 'Text long enough';
    
    return <div>{validationText}</div>;
}

export default validationComponent;