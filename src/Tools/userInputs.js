import React, { Component } from 'react';
import { getGroqChatCompletion } from '../../Tools/aiTools';

export class UserInputField extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userInput: undefined,
            response: ''
        }
    }
    

    response() {
        getGroqChatCompletion(this.state.userInput).then((res) => {
            this.setState({response: res.choices[0].message.content})
        })
    }

    click = (e) => {
        this.response()
        e.preventDefault()
    }

    change = (event) => {
        const newValue = event.target.value
        this.setState({
            userInput: newValue
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
                <p>{this.state.response}</p>
            </div>
            </>
        );
    }
}
