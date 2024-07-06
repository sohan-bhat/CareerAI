import React, { Component } from 'react';
import { getGroqChatCompletion } from '../../Tools/aiTools';
import ReactMarkdown from 'react-markdown'

class RequestAndResponse extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userInput: undefined,
            response: '',
            isClicked: false
        }
    }
    

    response() {
        getGroqChatCompletion(this.state.userInput).then((res) => {
            this.setState({response: res.choices[0].message.content})
        })
    }

    click = (e) => {
        this.setState({
            isClicked: true
        })
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
            <div className="flex-container">
                <div className="intro-title">Transforming Passion into Profession...</div>
                <div className="user-input-cover">
                    <form method="get">
                        <div className="tb">
                        <div className="td">
                            <input className='user-input' type="text" onChange={this.change} value={this.state.val} placeholder="Tell me your interests or what you like to do!" required/>
                        </div>
                        <div className="td" id="s-cover">
                            <button type="submit" onClick={this.click}>
                            <div className="s-circle"></div>
                            <span></span>
                            </button>
                        </div>
                        </div>
                    </form>
                </div>
                { this.state.isClicked ?
                    <div className="response-cover">
                        <p>
                            <ReactMarkdown>{this.state.response}</ReactMarkdown>
                        </p>
                    </div>
                    :
                    null
                }
            </div>
            </>
        );
    }
}

export default RequestAndResponse;