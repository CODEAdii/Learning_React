import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

import { TodoProvider } from '/src/context/TodoContext.js'
function App() {
  const [todos,setTodos]= useState([])
  
  const addTodo=(todo)=>{
    setTodos((prev)=> [{id:Date.now(),...todo},...prev] )
    {/*setTodos is a function used to update the state variable todos.The argument (prev) => [...prev, { id: Date.now(), ...todo }]
 is a function that takes the previous state (prev) and returns a new state;[...prev] creates a copy of the previous state
 array (todos). This is done using the spread operator (...), which essentially takes all the elements of the previous array 
 and puts them into a new array.{ id: Date.now(), ...todo } creates a new todo object. It has a unique id generated using
 Date.now() (which gives the current timestamp), and it also takes all the properties from the todo object provided as an 
 argument using the spread operator (...).*/}
       }
//note:using the map method to create a new array where each element is transformed based on the callback function.
    const updateTodo=(id,todo)=>{
      setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo:prevTodo)))
    }  
    
    const deleteTodo=(id)=>{
      setTodos((prev)=> prev.filter((todo)=>todo.id !==id))
    }
{/*prev.filter((todo) => todo.id !== id) is using the filter method to create a new array containing only those  todos whose id 
does not match the provided id parameter. In other words,it filters out the todo with the specified id from the previous array.*/}

//note:using the map method to create a new array where each element is transformed based on the callback function.

    const toggleComplete=(id)=>{
      setTodos((prev)=>
      prev.map((prevTodo)=>
      prevTodo.id === id ? {...prevTodo,
        completed:!prevTodo.completed}:prevTodo))

      /*completed: !prevTodo.completed--- This part creates a new property called completed in the object.
         !prevTodo.completed: The ! (logical NOT) operator is used to negate the value of prevTodo.completed.
         If prevTodo.completed is true, it becomes false, and vice versa. This effectively toggles the completion status.*/
    }


    //Local storage part--
    //note -we can acces local storage until we are in react and not doing server side rendering
    useEffect(() => {

    //localStorage.getItem("todos")--value will be in string and we need it in JASON
    const todos=JSON.parse(localStorage.getItem("todos"))

     if(todos && todos.length > 0) {
        setTodos(todos)
       }
    }, [])

    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
   


  return (

   <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8 ">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              {/* Todo form goes here */} 
              <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                <div key ={todo.id}
                className='w-full'>
                 <TodoItem todo={todo}/>
                </div>
              ))}
          </div>
        </div>
    </div>    
   </TodoProvider>
  )
}

export default App
