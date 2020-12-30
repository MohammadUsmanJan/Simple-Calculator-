import React from 'react'
import "./CalculatorScreen.css"

export const CalculatorScreen = ({firstNum}) => {
    return (
        <div className = "Screen">
            <h1>{firstNum}</h1>
        </div>
    )
}

export default CalculatorScreen;