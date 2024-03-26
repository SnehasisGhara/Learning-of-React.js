import { useState } from "react"

function App() {
  const [Color,setColor] = useState("Black")

  return (
    <div className="w-full h-screen duration-200"
     style={{backgroundColor : Color}}>
      <div className="fixed flex flex-wrap
       justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center
         gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
           onClick={()=>setColor("green")}
           className="outline-none px-4 py-1
           rounded-full shadow-lg" style={{backgroundColor:"Green", color:"white"}}>
            GREEN
          </button>
          <button 
          onClick={()=>setColor("red")}
          className="outline-none px-4 py-1
           rounded-full shadow-lg" style={{backgroundColor:"red", color:"white"}}>
            RED
          </button>
          <button
          onClick={()=>setColor("orange")}
          className="outline-none px-4 py-1
           rounded-full shadow-lg" style={{backgroundColor:"orange", color:"white"}}>
            ORANGE
          </button>
          <button
          onClick={()=>setColor("blue")}
          className="outline-none px-4 py-1
           rounded-full shadow-lg" style={{backgroundColor:"blue", color:"white"}}>
            BLUE
          </button>
        </div>  
      </div> 
    </div>
  )
}

export default App
