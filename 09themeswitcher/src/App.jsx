/* eslint-disable no-undef */


import { useEffect, useState } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './context/Theme'

function App() {
  const [themeMode,setThemeMode]=useState('light')


//when you dont know the define method function we can simply define the method with the given method name (line-20)defined method(line-13)
  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }

  //actual change in a theme(we do it using js:- no react)

  useEffect(()=>{

    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  

  return (
    //we will wrap it in ThemeProvider to acces all the classes--
    <ThemeProvider value={{themeMode, darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* themebtn*/}
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        {/* Card */}
                      <Card/>

                    </div>
                </div>
      </div>
    </ThemeProvider>     

  )
}

export default App
