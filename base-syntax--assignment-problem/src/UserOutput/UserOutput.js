import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hello {props.username}</p>
            <p>How are you</p>
        </div>
    )
};

export default userOutput;