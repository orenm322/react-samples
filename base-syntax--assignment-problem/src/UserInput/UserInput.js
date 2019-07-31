import React from 'react';

const userInput = (props) => {
    const style = {
        border: '2px solid red',
        padding: '8px',
        margin: '8px'
    };
    
    return (
        <input 
            style={style}
            type="text" 
            onChange={props.changed}  
            value={props.username} 
        />
    )
    
};

export default userInput;