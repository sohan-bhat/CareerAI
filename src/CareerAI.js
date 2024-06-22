import React, { Component } from 'react';
import UserInputField from './Tools/userInputField';
import './App.css'

class CareerAI extends Component {
    render() {
        return(
            <>
                <div className="intro-title">Transforming Passion into Profession...</div>
                <UserInputField />
            </>
        )
    }
}

export default CareerAI;