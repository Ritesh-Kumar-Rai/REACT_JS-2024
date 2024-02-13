import React from 'react';
import HapticOn from '../Haptic';


const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full h-16 p-5 bg-zinc-700 text-zinc-200 text-lg flex items-center justify-between'>
        <a onClick={HapticOn} href="https://www.linkedin.com/in/ritesh-kumar-rai-bb6901296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><i class="ri-linkedin-box-fill"></i></a>
        <h3 onClick={HapticOn}>Made By Ritesh Kumar Rai</h3>
        <a onClick={HapticOn} href="https://github.com/Ritesh-Kumar-Rai" target="_blank" rel="noopener noreferrer"><i class="ri-github-fill"></i></a>
    </footer>
  )
}

export default Footer