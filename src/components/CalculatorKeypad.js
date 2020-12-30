import React from 'react'
import "./CalculatorKeypad.css"
import {useState} from "react"
import CalculatorScreen from "./CalculatorScreen"

const CalculatorKeypad = () => {

    const [firstNum , setFirstNum] = useState(" ");
    
   
  

    // function Handler(val){

    //     if(operation === "0")
    //     {
    //         setFirstNum(val+ firstNum);
    //         console.log(firstNum)
    //     }
    //     else{
    //         setSecondNum(val + secondNum)
    //     }
        
    // }

    function Result()
    {
        try{
        setFirstNum(
            String(eval(firstNum)).includes(".") ?  String(eval(firstNum).toFixed(4)) : String(eval(firstNum))  
            
            )
        }
        catch(error)
        {
            alert(error)
        }
    }



    return (
        <div>

            <CalculatorScreen firstNum = {firstNum}/>
            
            <div className = "buttons">
                <button value = {8} className = "AC"  onClick = {() => setFirstNum(" ")}>AC</button>
                <button value = {8} className  = "AC" ></button>
                <button value = "%" className = "per" onClick = {(e) => {setFirstNum(firstNum + e.target.value)}}>%</button>
                <button value = "/" className = "divide" onClick = {(e) => setFirstNum(firstNum + e.target.value)}>/</button>
                <button value = {8} className = "seven" onClick ={(e) => setFirstNum(firstNum + e.target.value)}>7</button>
                <button value = {8} className = "eight" onClick = {(e) => setFirstNum(firstNum + e.target.value)}>8</button>
                <button value = {9} className = "nine" onClick = {(e) => setFirstNum(firstNum + e.target.value)}>9</button>
                <button value = "*" className = "multiply" onClick = {(e) => setFirstNum(firstNum + e.target.value)}>x</button>
                <button value = {4} className = "four" onClick = {(e) => setFirstNum(firstNum + e.target.value)}>4</button>
                <button value = {5} className = "five" onClick = {(e) => setFirstNum(firstNum + e.target.value)}>5</button>
                <button value = {6} className = "six" onClick = {(e) => setFirstNum(firstNum + e.target.value)}>6</button>
                <button value = "-" className = "minus" onClick = {(e) => setFirstNum(firstNum + e.target.value)}>-</button>
                <button value = {1} className = "one" onClick = {(e) => setFirstNum(firstNum + e.target.value)}>1</button>
                <button value = {2} className = "two" onClick = {(e) => setFirstNum(firstNum + e.target.value)}>2</button>
                <button value = {3} className = "three" onClick = {(e) => setFirstNum(firstNum + e.target.value)}>3</button>
                <button value = "+" className = "plus" onClick = {(e) => setFirstNum(firstNum + e.target.value)}>+</button>
                <div className = "bottom">
                <button value = {0} className = "zero" onClick = {(e) => setFirstNum(firstNum + e.target.value)}>0</button>
                <button value = "." className = "dot" onClick = {(e) => setFirstNum(firstNum + e.target.value)}>.</button>
                <button value = "=" className = "equalto" onClick = {Result}>=</button>
                </div>
            </div>
        </div>
    )
}

export default CalculatorKeypad
