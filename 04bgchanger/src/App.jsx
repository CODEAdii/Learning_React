import{useState} from "react"

function App() {
  const [color,setColor] = useState("cyan");
  const [displayText,setDisplayText]=useState("");
  
  const handleColorChange = (newColor, displayText) => {
    setColor(newColor);
    setDisplayText(displayText);
  };
  

  return (
    <>
      <div className="w-full h-screen duration-200 fade-out"
      style={{backgroundColor:color}}>
               
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white 
          px-3 py-2 rounded-full">
            <button 
            onClick={() => handleColorChange("red", "RED")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"red"}}>Red
            </button>
            <button 
            onClick={() => handleColorChange("blue", "BLUE")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"blue"}}>Blue
            </button>
            <button 
            onClick={() => handleColorChange("Orange", "ORANGE")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"orange"}}>Orange
            </button>
            <button 
            onClick={() => handleColorChange("black", "BLACK")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"black"}}>Black
            </button>
            <button 
            onClick={() => handleColorChange("green", "GREEN")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"green"}}>Green
            </button>
            <button 
            onClick={() => handleColorChange("white", "WHITE")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor:"white"}}>White
            </button>
            </div>
        </div>
        <div className="text-center text-4xl text-white mt-5">{displayText}</div>
      

      </div>

      
    </>
  )
}

export default App
