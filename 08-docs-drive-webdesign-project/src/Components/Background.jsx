import React from 'react';
import Navbar from './Navbar';


const Background = () => {
  return (
    <div className='absolute z-[2]  flex-auto w-full h-full overflow-auto'>
        <Navbar/>
        <h1 className='fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-[180px] tracking-tighter text-sky-800 font-semibold'>Docs.</h1>
    </div>
  )
}

export default Background