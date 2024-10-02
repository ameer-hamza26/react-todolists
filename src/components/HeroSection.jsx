import React, { useState } from 'react'
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const HeroSection = () => {

    const [todo, settodo] = useState("");
    const [todos, settodos] = useState([]);

    
    const handleEdit=(e,id)=>{
      const filteredTodo = todos.filter(item => item.id === id); 
      if (filteredTodo.length > 0) {
        settodo(filteredTodo[0].todo); 
      } else {
        alert("No todo found with the given ID:", id);
      }
        let newTodos=todos.filter(item=>{
          return item.id !== id;
        })
        settodos(newTodos);
  
    }

    useEffect(() => {
      let todoString=localStorage.getItem("todos");
      if(todoString){
        let todos=JSON.parse(localStorage.getItem("todos"))
        settodos(todos);
      }

    }, [])
    
    const saveToLS = () => {
      localStorage.setItem("todos",JSON.stringify(todos));
    }
    
      const handleDelete=(e,id)=>{
      let newTodos=todos.filter(item=>{
        return item.id !== id;
      })

      settodos(newTodos);
      saveToLS();

    }

    const handleAdd=()=>{
      settodos([...todos,{id:uuidv4(),todo,isCompleted:false}]);
      settodo("");
      saveToLS();
    }

    const handleChange=(event)=>{
        settodo(event.target.value);
    }

    const handleCheckBox = (e) => {
      let id = e.target.name;
      let index = todos.findIndex(item=>{
        return item.id==id;
      })

      let newTodos=[...todos];
      newTodos[index].isCompleted=!newTodos[index].isCompleted;
      settodos(newTodos);
      saveToLS();
    }
    
  return (<div style={{height:"85vh"}} className="container mx-auto bg-gray-300 p-5 rounded-3xl  md:w-1/2 mt-5 md:mt-5">
      <div className="">
        <h1 className="text-3xl font-bold text-center">Get Your Tasks Done in a Smart Way</h1>
        <h1 className="text-2xl my-5">Add a Todo</h1>
        <div className='flex items-center '>
        <input onChange={handleChange} value={todo}  className=" mr-4 w-full border border-black px-3 py-1 rounded-lg" type="text" />
        <button onClick={handleAdd}   disabled={todo.length<=3} className=" text-white items-center bg-green-600 border-0 py-1 px-4 rounded-lg focus:outline-none hover:bg-green-700 rounded text-base mt-4 md:mt-0  text-center">Add</button>
        </div>
      </div>
      <div className="container">
        <h1 className='text-2xl my-6 text-center'>Your Todos</h1>
        {todos.length===0 && <div className="text-center text-xl">No todos to display</div>}

            {todos.map(item=>{

        return <div key={item.id} className="todos flex justify-between w-full my-4">
        <div className="flex gap-6 items-center" >
        <input name={item.id} onChange={handleCheckBox} checked={item.isCompleted}  type="checkbox"  />
        <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
        </div>
        <div className="btn-container flex h-full">
        <button onClick={(e)=>{handleEdit(e,item.id)}} className="inline-flex text-black items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 "><FaEdit /></button>
        <button onClick={(e)=>{handleDelete(e,item.id)}} className="inline-flex text-black items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-900 rounded text-base mt-4 md:mt-0 mx-2"><MdDelete /></button>
        </div>
        
        </div>
        })}
      </div>
    </div>
  )  
}

export default HeroSection
