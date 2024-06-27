import React, { Component } from 'react';
import { main } from './aiTools';

export class UserInputField extends Component {

    constructor(props) {
        super(props)
        this.state = {
            val: undefined,
            isClicked: false
        }
    }
    

    response() {
        main(this.state.val)
        return (
            <p>Fetching Data...</p>
        )
    }
    click = (e) => {
        // main(this.state.val)
        this.setState({
            isClicked: true
        })
        e.preventDefault()
    }
    change = (event) => {
        const newValue = event.target.value
        this.setState({
            val: newValue
        })
    }
    render() {
        return(
            <>
            <div id="user-input-cover">
                <form method="get">
                    <div className="tb">
                    <div className="td">
                        <input className='user-input' type="text" onChange={this.change} value={this.state.val} placeholder="I like music, art, and literature..." required/>
                    </div>
                    <div className="td" id="s-cover">
                        <button type="submit" onClick={this.click}>
                        <div id="s-circle"></div>
                        <span></span>
                        </button>
                    </div>
                    </div>
                </form>
            </div>
            <div id="response-cover">
                {
                    this.state.isClicked ? 
                    this.response()
                    :
                    <p></p>
                }
            </div>
            </>
        );
    }
}