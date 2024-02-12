import { useCallback, useState } from 'react';
import HapticOn from './Haptic';
import { DisplayTodo } from './Components/DisplayTodo';
import Modal from './Components/EditModal';

function App() {
  
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [originalTodo, setOriginalTodo] = useState([]);
  const [isOpenModal, setisOpenModal] = useState(false);
  const [keyForEdit, setkeyForEdit] = useState(null);

  const handleChange = useCallback((e)=>{
          if(e.target.id === "title"){
            setTitle(e.target.value);
          }else if(e.target.id === "desc"){
            setDesc(e.target.value);
          }

  },[setTitle, setDesc]);


  function handleSave(e){

     e.preventDefault();

     console.log(title,desc)
     // saving data to originalTodo state variable
    setOriginalTodo([...originalTodo, {title, desc}]);

    setTitle("");
    setDesc("");
  
     console.log(originalTodo)
     

  }

  // function for remove item
  function removeItem(index){
        let copyTodo = [...originalTodo];
        copyTodo.splice(index,1);
        setOriginalTodo(copyTodo);
  }

  // function for edit
  function openModal(key){
      // console.log("Key is", key);
      // console.log("Org todo :", originalTodo[key]);
      setisOpenModal(true);
      setkeyForEdit(key);
  }

  function closeModal(){
    setisOpenModal(false);
  }

  let renderTask = <h1 className='mt-3 text-gray-500'>No Task Available</h1>;

  if(originalTodo.length > 0){
            renderTask = originalTodo.map((item, index)=>{
                return  <div key={index} className="flex justify-between p-2 my-2 h-auto w-auto rounded">
                <div>
                  <h1 className="text-red-500 font-bold">Title : {item.title}</h1>
                  <h5 className="text-yellow-500"><span className='font-bold'>Description :</span> {item.desc}</h5>
                </div>
                <div className="p-3 rounded">
                  <button onClick={()=>{HapticOn(); openModal(index);}} type="button" className="mx-3 my-1 py-1 px-2 bg-yellow-400 hover:bg-yellow-600 text-white rounded">Edit</button>
                  <button onClick={()=>{HapticOn(); removeItem(index);}} type="button" className="mx-3 my-1 py-1 px-2 bg-red-400 hover:bg-red-600 text-white rounded">Remove</button>
                </div>
              </div>
            });
  }

  return (
    <>

      <div className="absolute p-5 bg-cyan-800 h-auto w-full">
        <div className="relative md:left-1/4 p-5 bg-blue-900 text-white text-lg md:w-6/12 rounded">
          <form className="flex flex-col rounded" onSubmit={handleSave}>
            <label htmlFor="title">Title:</label>
            <input className="rounded p-1 bg-blue-500" type="text" id="title" value={title} onChange={handleChange} placeholder='Enter your Title' />

            <label htmlFor="desc">Description:</label>
            <textarea className="rounded p-1 bg-blue-500" id="desc" cols="30" rows="5" value={desc} onChange={handleChange} placeholder='Describe in Detail'></textarea>

            <div className="flex justify-center mt-2">
              <button className="px-3 py-1 border-2 mt-2 rounded bg-gray-800 hover:bg-gray-500" onClick={HapticOn}>Save</button>
            </div>
          </form>
        </div>


        <DisplayTodo render_var={renderTask}/>
       <Modal visible={isOpenModal} close={closeModal} keyForEdit={keyForEdit} originalTodo={originalTodo} setOrgTodos={setOriginalTodo}/>
      </div>


    </>
  )
}

export default App
