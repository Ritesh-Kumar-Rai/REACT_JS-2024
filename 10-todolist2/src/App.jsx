import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import Navbar from './Components/Navbar';


function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  const handleChange = useCallback(
    (e) => {
      console.log(e.target.value, uuidv4());
      settodo(e.target.value);
    },
    [todo, settodo]
    );

    function handleSave(){
      settodos([...todos,{id : uuidv4(), todo, isCompleted: false}]);
      settodo("");
      console.log(todos);
    }
  

  return (
    <>
      <Navbar />
      <div className='md:absolute m-5 md:left-[50%] md:top-[10%] md:-translate-x-[50%] rounded-lg mx-auto p-8 bg-violet-100 min-h-3/5 md:w-2/4'>
        <div className='container bg-violet-100 rounded p-5'>
          <h1 className='text-2xl mx-2 font-bold'>Add a Todo</h1>
          <div className='flex justify-between p-2 h-auto rounded-xl '>
            <input type="text" name="todolist" value={todo} onChange={handleChange} className='w-full mx-2 py-1 px-2 rounded-xl' />
            <button type="button" className='border-none bg-violet-900 rounded-xl text-purple-100 hover:bg-purple-500 text-lg font-semibold py-1 px-2 ' onClick={handleSave}>Add</button>
          </div>
          <input type="checkbox" name="finished" id="finished" className='mx-2' /> 
          <label htmlFor="finished">Completed Task</label>
          
        </div>
        <hr className='h-1 bg-indigo-300 rounded-3xl' />
        <div className="todos md:w-full h-auto  m-2 md:p-5 rounded-lg">
          <h1 className='text-2xl mx-2 font-bold'>Your Todos :</h1>
          {todos.length === 0 ? <h1 className='mx-2 mt-3 text-zinc-500'>No Todos to Display!</h1>:""}
          {
            todos.map(item=>{
                  return (<div key={item.id} className="todo flex w-full justify-between items-center m-2">
                    <div className='flex gap-1'>
                        <input type="checkbox" name="" />
                        <p className={`text-sm ${item.isCompleted ? "line-through":""}`}>{item.todo}</p>
                    </div>
                        <div className="btns gap-1 flex md:gap-2">
                          <button type="button" className='bg-violet-900 text-violet-100 hover:bg-violet-500 px-2 py-1 rounded-xl'><i className="ri-edit-box-line"></i></button>
                          <button type="button" className='bg-violet-900 text-violet-100 hover:bg-violet-500 px-2 py-1 rounded-xl'><i className="ri-delete-bin-6-line"></i></button>
                        </div>
                  </div>
                  );
            })
          }
              
        </div>
      </div>
    </>
  )
}

export default App
