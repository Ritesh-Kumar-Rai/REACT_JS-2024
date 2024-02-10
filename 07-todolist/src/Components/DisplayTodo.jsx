import HapticOn from "../Haptic"


export const DisplayTodo = (props) => {
  

  return (
    <div className="p-5 mt-5 bg-sky-900 w-auto min-h-96 text-white text-xl rounded-xl mb-52">
        <h1>Your Todos : </h1>
        {/* <div className="flex justify-between p-2 my-2 h-auto w-auto rounded">
          <div>
            <h1 className="text-red-500 font-bold">Title : {props.titles}</h1>
            <h5 className="text-yellow-500">Description : {props.description}</h5>
          </div>
          <div className="p-3 rounded">
            <button onClick={HapticOn} type="button" className="mx-3 my-1 py-1 px-2 bg-yellow-400 hover:bg-yellow-600 text-white rounded">Edit</button>
            <button onClick={HapticOn} type="button" className="mx-3 my-1 py-1 px-2 bg-red-400 hover:bg-red-600 text-white rounded">Remove</button>
          </div>
        </div> */}
        {props.render_var}
    </div>
  )
}
