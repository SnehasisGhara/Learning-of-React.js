
import { useState } from 'react'
import './App.css'
import Card from 'c:/Users/sneha/OneDrive/Desktop/Full Stack Tutorial/React.js  code/03_React_With_Tailwind/src/components/card'

function App() {
  const [count,setCount] = useState(0)
  let myObj = {name: "Snehasis",age:26,Profession:"Engineer"}

  



  return (
    <>
      <h1 className="bg-green-400 text-black p-4
      rounded-xl mb-4">03_React_With_Tailwind</h1>
      <Card UserName="Sonu"  btnTxt="Click Me" />
      <Card UserName="Tanu"   />

    </>


   

    
  )
}

export default App
