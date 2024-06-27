import React from 'react';
import { main } from '../Tools/aiTools';
function Response({text}) {
    return (
        <div id="response-cover">
            <p>{text}</p>
        </div>
    );
};

export default Response;