import { useState } from 'react'

// import './App.css'



function isHapticOn(){
  if (navigator.vibrate) {
    // Use navigator.vibrate to create haptic effects
    navigator.vibrate(150);
    // navigator.vibrate([200, 100, 200]);


  }
}

function App() {
  
  const [color, setColor] = useState("white");

  return (
    // style={{backgroundColor:color}} in div tag
   <div className={`w-full h-screen text-black bg-${color}`} >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 pxy-3 rounded-lg'>
              <button className='outline-one px-4 py-1 my-2 mx-2 bg-red-600 rounded-full text-white shadow-lg' type="button" onClick={() => {setColor("red-600"); isHapticOn()}}>Red</button>
              <button className='outline-one px-4 py-1 my-2 mx-2 bg-green-600 rounded-full text-white shadow-lg' type="button" onClick={() =>{ setColor("green-600"); isHapticOn()}}>Green</button>
              <button className='outline-one px-4 py-1 my-2 mx-2 bg-blue-600 rounded-full text-white shadow-lg' type="button" onClick={() =>{ setColor("blue-600"); isHapticOn()}}>Blue</button>
              <button className='outline-one px-4 py-1 my-2 mx-2 bg-lime-200 rounded-full text-black shadow-lg' type="button" onClick={() =>{ setColor("lime-200"); isHapticOn()}}>Lime</button>
              <button className='outline-one px-4 py-1 my-2 mx-2 bg-gray-500 rounded-full text-white shadow-lg' type="button" onClick={() =>{ setColor("gray-500"); isHapticOn()}}>Grey</button>
              <button className='outline-one px-4 py-1 my-2 mx-2 bg-yellow-600 rounded-full text-black shadow-lg' type="button" onClick={() =>{ setColor("yellow-600"); isHapticOn()}}>Yellow</button>
              <button className='outline-one px-4 py-1 my-2 mx-2 bg-pink-200 rounded-full text-black shadow-lg' type="button" onClick={() =>{ setColor("pink-200"); isHapticOn()}}>Pink</button>
              <button className='outline-one px-4 py-1 my-2 mx-2 bg-purple-600 rounded-full text-white shadow-lg' type="button" onClick={() =>{ setColor("purple-600"); isHapticOn()}}>Purple</button>
              <button className='outline-one px-4 py-1 my-2 mx-2 bg-purple-100 rounded-full text-black shadow-lg' type="button" onClick={() =>{ setColor("purple-100"); isHapticOn()}}>Lavender</button>
              <button className='outline-one px-4 py-1 my-2 mx-2 bg-white rounded-full text-black shadow-lg' type="button" onClick={() =>{ setColor("white"); isHapticOn()}}>White</button>
              <button className='outline-one px-4 py-1 my-2 mx-2 bg-black rounded-full text-white shadow-lg' type="button" onClick={() =>{ setColor("black"); isHapticOn()}}>Black</button>
            </div>
        </div>
   </div>
  )
}

export default App
