import { useState } from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'
function App() {

  return (
      <div className='absolute z-0 top-0 left-0 w-full h-screen bg-sky-950 flex flex-col'>
        <Background/>
        <Foreground/>
      </div>
  )
}

export default App
