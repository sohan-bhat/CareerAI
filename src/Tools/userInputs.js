import React from 'react';
import { useState } from 'react';
import { main } from './aiTools';

export const UserInputField = () => {
    const [val, setVal] = useState()
    const click = (e) => {
        main(val)
        e.preventDefault()
    }
    const change = event => {
        const newValue = event.target.value
        setVal(newValue)
    }
    return (
        <div id="user-input-cover">
            <form method="get">
                <div className="tb">
                <div className="td">
                    <input className='user-input' type="text" onChange={change} value={val} placeholder="I like music, art, and literature..." required/>
                </div>
                <div className="td" id="s-cover">
                    <button type="submit" onClick={click}>
                    <div id="s-circle"></div>
                    <span></span>
                    </button>
                </div>
                </div>
            </form>
        </div>
    );
}