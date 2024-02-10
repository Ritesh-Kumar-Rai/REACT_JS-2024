

export default function Modal(props) {

    if (!props.visible) return null;

    return (
        
            <div className="fixed inset-0 top-0 h-screen w-full p-5 bg-opacity-95 backdrop-blur-sm flex align-center justify-center">
                
                    <div className="absolute top-10 p-5 bg-slate-500 bg-opacity-95 backdrop-blur-5 text-black text-lg h-1/2 md:w-6/12 rounded">
                        <div className="flex justify-end "> <button className="bg-red-500 text-white rounded px-2 py-1" type="button" onClick={props.close}>Cancel</button></div>
                        <form className="flex flex-col rounded">
                            <label htmlFor="title">Title:</label>
                            <input className="rounded p-1 " type="text" id="title" value={title}  placeholder='Enter your Title' />

                            <label htmlFor="desc">Description:</label>
                            <textarea className="rounded p-1 " id="desc" cols="30" rows="5" value={desc}  placeholder='Describe in Detail'></textarea>

                            <div className="flex justify-center mt-2">
                                <button className="px-3 py-1 border-2 mt-2 rounded bg-green-500 hover:bg-gray-500" >Save</button>
                            </div>
                        </form>
                    </div>
                </div>
           
            )
}
