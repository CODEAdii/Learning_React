import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)
  let myObj={
    username:"Aditya",
    age:24
  }
  let newArr=[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-balck p-4 rounded-xl mb-5'>Tailwind Test</h1>
    {/* <Card username="chaiaurcode" someObje={newArr} /> */}
    <Card username="Aditya" btnText="Visit"/>
    <Card username="Sorav" btnText="Enter"/>
    <Card username="Default.."/>
    
    
    </>
  );
}

export default App;
