/* eslint-disable no-unused-vars */
import{createContext,useContext} from "react"

export const TodoContext =createContext({
    todos:[{
          id:1,
          todo:"Todo msg",
          completed:false
    }],
    //above are the properties and we will write functionalities
    addTodo:(todo) => {},
    updateTodo:(id,todo) => {},
    deleteTodo:(id) => {},
    toogleComplete:(id) => {}
    
})



export const useTodo = () => {
  return useContext(TodoContext) 
}


export const TodoProvider=TodoContext.Provider