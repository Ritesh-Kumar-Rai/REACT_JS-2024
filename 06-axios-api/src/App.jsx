import { useState } from 'react'
import axios from 'axios'


function App() {
  
  const [images, setImages] = useState([]);

  async function callAxios(){

    try {
      const response = await axios.get('https://picsum.photos/v2/list');
      const data = response.data;
      setImages(data);
      
    } catch (error) {
      console.error(error.response);
    }

  }

  return (
    <>
    <div className="container my-5 p-5 w-100">
     <button onClick={callAxios} className='btn btn-primary p-1 px-1 border-0 rounded text-align-center'>Get Images</button>
     <div className="container m-5 w-100 rounded">
        {images.map((elem,index)=>{
          console.log(elem,index)
          return <img key={index} className='d-inline-flex mx-2 my-2 rounded ' src={elem.download_url} alt={"author : "+ elem.author} srcSet="" width={400} height={300}/>
          })}
      </div>
      
    </div>
    </>
  )
}

export default App
