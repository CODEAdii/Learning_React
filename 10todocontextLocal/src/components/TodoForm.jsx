/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { useTodo } from '../context/TodoContext';

function TodoForm(){

const [todo,setTodo]=useState("")

 //useTodo extracted from TodoContext whatever functionality we need already has in useTodo--
const {addTodo} = useTodo()

const add = (e) => {
  e.preventDefault()
  
  if (!todo) return

  addTodo({/*todo:*/todo, completed:false})
  // here in "todo:todo" field and value name is same we can just write todo
  setTodo("")
  /*setTodo(""): After successfully adding the todo, this line sets the todo state to an
   empty string. This has the effect of clearing the input field, making it ready for the user to enter the next todo item.*/


 }

  return (
    <form onSubmit={add} className="flex">
      <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={todo}
          onChange={(e)=> setTodo(e.target.value)}
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
          Add
      </button>
    </form>
  );
}

export default TodoForm;


