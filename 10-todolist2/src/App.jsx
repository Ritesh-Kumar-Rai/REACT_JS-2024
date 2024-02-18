import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import Navbar from './Components/Navbar';


function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [isCheck, setisCheck] = useState(false);


  useEffect(() => {
    const reloadtodo = JSON.parse(localStorage.getItem("todo"));
    if(reloadtodo) settodos(reloadtodo);
  }, [])
  

  const handleChange = useCallback(
    (e) => {
      
      settodo(e.target.value);
    },
    [todo, settodo]
    );

  
    
    useEffect(() => {
      if(todos.length>0) localStorage.setItem("todo", JSON.stringify(todos));

    }, [todos,settodos])
    

    function handleSave(){
      settodos([...todos,{id : uuidv4(), todo, isCompleted: false}]); // callback func.
      settodo("");
    }

    function handleCheck(id){
        const index = todos.findIndex((item)=>item.id===id);
        let shallow_todos = [...todos];
        shallow_todos[index].isCompleted = !shallow_todos[index].isCompleted;
        
        settodos(shallow_todos);
    }

    function deleteTodo(index){
        let copied_todo = [...todos];
        copied_todo.splice(index,1);
        settodos(copied_todo);
        console.log(todos)
    }

    function editTodo(index,id){
        const newTodo = todos.filter((i)=> i.id===id);
        settodo(newTodo[0].todo);
        deleteTodo(index);
    }
  


  return (
    <>
      <Navbar />
      <div className='md:absolute m-5 md:left-[50%] md:top-[10%] md:-translate-x-[50%] rounded-lg mx-auto p-8 bg-violet-100 min-h-3/5 md:w-2/4'>
        <div className='container bg-violet-100 rounded p-5'>
          <h1 className='text-2xl mx-2 font-bold'>Add a Todo</h1>
          <div className='flex justify-between p-2 h-auto rounded-xl '>
            <input type="text" name="todolist" value={todo} onChange={handleChange} className='w-full mx-2 py-1 px-2 rounded-xl' />
            <button type="button" className='border-none bg-violet-900 rounded-xl text-purple-100 disabled:bg-neutral-400 hover:bg-purple-500 text-lg font-semibold py-1 px-2 ' disabled={todo.length<=2} onClick={handleSave}>Add</button>
          </div>
          <input type="checkbox" name="finished" checked={isCheck} onChange={()=>setisCheck(prev => !prev)} id="finished" className='mx-2' /> 
          <label htmlFor="finished">Completed Task</label>
          
        </div>
        <hr className='h-1 bg-indigo-300 rounded-3xl' />
        <div className="todos md:w-full h-auto  m-2 md:p-5 rounded-lg">
          <h1 className='text-2xl mx-2 font-bold'>Your Todos :</h1>
          {todos.length === 0 ? <h1 className='mx-2 mt-3 text-zinc-500'>No Todos to Display!</h1>:""}
          {
            todos.map((item,index)=>{
               
                return (isCheck || !item.isCompleted) && (<div key={item.id} className="todo flex w-full justify-between items-center m-2">
                    <div className='flex gap-1'>
                        <input type="checkbox" id={item.id} value={item.isCompleted} onChange={()=>handleCheck(item.id)} />
                        <label htmlFor={item.id} className={`text-sm ${item.isCompleted ? "line-through":""}`}>{item.todo}</label>
                    </div>
                        <div className="btns gap-1 flex md:gap-2">
                          <button type="button" className='bg-violet-900 text-violet-100 hover:bg-violet-500 px-2 py-1 rounded-xl' onClick={()=>editTodo(index,item.id)}><i className="ri-edit-box-line"></i></button>
                          <button type="button" className='bg-violet-900 text-violet-100 hover:bg-violet-500 px-2 py-1 rounded-xl' onClick={()=>deleteTodo(index)}><i className="ri-delete-bin-6-line"></i></button>
                        </div>
                  </div>
                  )
                }
            )
          }
              
        </div>
      </div>
    </>
  )
}

export default App
