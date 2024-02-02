import { useState } from 'react';
import './App.css';

function App() {
let [num1,setnum1]= useState("")
let [num2,setnum2]= useState("")
let [ans,setans]= useState()

function sum() {
  setans(parseInt(num1)+parseInt(num2))
}
function sub() {
  setans(parseInt(num1)-parseInt(num2))
}
function mul() {
  setans(parseInt(num1)*parseInt(num2))
}
function div() {
  setans(parseInt(num1)/parseInt(num2))
}
  return (
    <div className="App">

        <input type='text' onChange={(e)=> {setnum1(e.target.value)}}></input>
        <br></br>
        <input type='text' onChange={(e)=> {setnum2(e.target.value)}}></input>
        <br></br>
        <br></br>

        <input type='button' value={"Addition"} onClick={sum}></input>
        <input type='button' value={"Subtraction"} onClick={sub}></input>
        <input type='button' value={"Multiplication"} onClick={mul}></input>
        <input type='button' value={"Division"} onClick={div}></input>
        <br></br>

        <input type='text' value={ans}></input>

    </div>
  );
}

export default App;
