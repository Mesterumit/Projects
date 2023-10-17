// import logo from './logo.svg';
import { useState } from "react";
import Button from "./Button";
import NumDisplay from "./NumDisplay";
import "./App.css";
import Input from "./Input";
import ''


const App = () => {

  let [num, setNum] = useState(0);

  let [input,setInput] = useState('')

  function changeNum(operator) {
    if (operator === "+") {
      setNum(num + 1)
    } else if (operator === "-") {
      setNum((num - 1))
    }
  }

  function handelChange(e){
    setInput(e.target.value)
    console.log(e.target.value)
    
  }

  return (
    <div id="main">
      <Button text={"-"} clickHandler={changeNum}/>
      <NumDisplay number={num} />
      <Button text={"+"} clickHandler={changeNum}/>

      {/* <input onChange={()=>console.log('hi')} type='text'/>
      <input onChange={(e)=>handelChange(e)} type='text' placeholder="e.target.value"/> */}

     <Input val={input} handelChange={handelChange} />
    </div>
  )
}

export default App;
