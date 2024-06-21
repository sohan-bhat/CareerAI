import React from 'react';
import { useState } from 'react';
import { main } from './aiTools';

// function UserInputField() {
//     const [val, setVal] = useState()
//     const click = () => {
//         return val
//     }
//     const change = event => {
//         const newValue = event.target.value
//         setVal(newValue)
//     }
//     return (
//         <div id="cover">
//             <form method="get" action="">
//                 <div className="tb">
//                 <div className="td">\
//                     <input type="text" onChange={change} value={val} placeholder="I like music, art, and literature...." required/>
//                 </div>
//                 <div className="td" id="s-cover">
//                     <button type="submit" onClick={click}>
//                     <div id="s-circle"></div>
//                     <span></span>
//                     </button>
//                 </div>
//                 </div>
//             </form>
//         </div>
//     );
// }

const UserInputField = () => {
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
        <div id="cover">
            <form method="get">
                <div className="tb">
                <div className="td">
                    <input type="text" onChange={change} value={val} placeholder="I like music, art, and literature..." required/>
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

export default UserInputField;