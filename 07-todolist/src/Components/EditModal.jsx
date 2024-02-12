import { useCallback, useState } from "react";
import HapticOn from "../Haptic";

export default function Modal(props) {

    if (!props.visible) return null;

    const [title2, setTitle2] = useState(props.originalTodo[props.keyForEdit]?.title || "");
    const [desc2, setDesc2] = useState(props.originalTodo[props.keyForEdit]?.desc || "");
    const [ShowAlert, setShowAlert] = useState(null);



    const handleEditChange = useCallback((e) => {
        console.log(e.target.value);
        if (e.target.id === "title") {
            setTitle2(e.target.value);
        } else if (e.target.id === "desc") {
            setDesc2(e.target.value);
        }
    }, [setTitle2, setDesc2]);

    function handleSaveChanges(e) {
        e.preventDefault();
        HapticOn();

        try {
            let copyTodos = [...props.originalTodo];

            if (props.keyForEdit !== "null" && copyTodos) {

                // saving changes...
                copyTodos[props.keyForEdit].title = title2;
                copyTodos[props.keyForEdit].desc = desc2;
                props.setOrgTodos(copyTodos);
                console.log(copyTodos);
                const alert = <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 my-2 rounded relative" role="alert">
                    <strong className="font-bold">Done! </strong>
                    <span className="block sm:inline">Changes successfully saved for the title <b>{title2}</b></span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg onClick={closeAlert} className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                    </span>
                </div>;
              
                if (alert) {
                    setShowAlert(alert);
                }
            }
        } catch (error) {
            alert(error);
           

                 setShowAlert(<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Oops! Something Bad Happened</strong>
                    <span className="block sm:inline">Changes failed to save for the title <b>{title2}</b></span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg onClick={closeAlert} className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                    </span>
                </div>);
            
        }
    }

    function closeAlert(){
        HapticOn();
        setShowAlert(null);    
    }

    return (

        <div className="fixed inset-0 top-0 h-screen w-full p-5 bg-opacity-95 backdrop-blur-sm flex align-center justify-center">
            <div className="absolute top-10 p-5 bg-slate-500 bg-opacity-95 backdrop-blur-5 text-black text-lg h-auto md:w-6/12 rounded">
                {ShowAlert}
                <div className="flex justify-end "> <button className="bg-red-500 text-white rounded px-2 py-1" type="button" onClick={()=>{props.close(); HapticOn()}}>Cancel</button></div>
                <form className="flex flex-col rounded">
                    <label htmlFor="title">Title:</label>
                    <input className="rounded p-1 " type="text" id="title" value={title2} onChange={handleEditChange} placeholder='Enter your Title' />

                    <label htmlFor="desc">Description:</label>
                    <textarea className="rounded p-1 " id="desc" cols="30" rows="5" value={desc2} onChange={handleEditChange} placeholder='Describe in Detail'></textarea>

                    <div className="flex justify-center mt-2">
                        <button className="px-3 py-1 border-2 mt-2 rounded bg-green-500 hover:bg-gray-500" onClick={handleSaveChanges}>Save Changes</button>
                    </div>
                </form>
            </div>
        </div>

    )
}
