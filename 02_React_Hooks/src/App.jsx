import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[Counter , setCounter] = useState(0)
  // let Counter = 0;
  const addValue = function() {
    console.log(Counter)
    // Counter = Counter + 1;
    // setCounter(Counter=> Counter + 1);
    // setCounter(Counter=> Counter + 1);
    // setCounter(Counter=> Counter + 1);
    // setCounter(Counter=> Counter + 1);
    // setCounter(Counter=> Counter + 1);
    if(Counter < 30){
      setCounter(Counter + 1);
      setCounter(Counter + 1);
      setCounter(Counter + 1);
      setCounter(Counter + 1);
      setCounter(Counter + 1);
    
    }
    else{
          alert("'Counter cannot exceed 30!'")
    }
    
  }
  const removeValue = ()=>{
    console.log(Counter);
    // setCounter(Counter - 1)
    if(Counter > 0){
      setCounter(Counter - 1);
    }else{
          alert('Counter cannot be less than 0!')
    }

  }


  return (
    <>
      <h1>02_React_Hooks</h1>
      <h3>Counter Value : {Counter}</h3>

      <button
      onClick={addValue}>Add Value </button>
      <br />
      <br />
      <button
      onClick={removeValue}>Remove Value</button>
  
    </>
  )
}

export default App
