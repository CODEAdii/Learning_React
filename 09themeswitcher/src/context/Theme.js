import {createContext,useContext} from "react";




export const ThemeContext = createContext({
  themeMode:'Light',
  darkTheme:()=>{},
  lightTheme:()=>{},
})


// we can export themecontxt.provider from here only no need to make separate class-
export const ThemeProvider = ThemeContext.Provider

//we can export custom hooks too
export default function useTheme(){
  return useContext(ThemeContext)
}

//now it make easier we will just import useTheme() and it will import all the classes