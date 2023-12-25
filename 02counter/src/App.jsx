import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter,setCounter] = useState(1)

  // let counter = 1

  const addValue=()=>{
    // console.log("value added",Math.random());
    // if(counter<10)
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)

   

    console.log("clicked",counter);

  }


  const deleteValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }else console.error('error');
  }
  
  const clear = () => {
    
    setCounter(0); // Reset the counter to 0
    console.log("Counter cleared");
  };

  return (
    <>
      
      <h1>Learning React </h1>
      <h2>Counter value: {counter}</h2>
     <button
     onClick={addValue}
     >Add value</button>
     <br />
     <button
     onClick={deleteValue}>Remove value</button>

     <button
     onClick={clear}>Clear</button>
    
    </>
  )
}

export default App
