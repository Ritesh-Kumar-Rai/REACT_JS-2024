import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Date_Picker from './components/custom_uis/Date_Picker'

function App() {
  const [theme, setTheme] = useState('light');



  let themwa = 'light'
  const handleTheme = () => {
    // setTheme(prev => prev === 'light' ? 'dark' : 'light');
    themwa = theme === 'light' ? 'dark' : 'light';
    setTheme(themwa)
    document.documentElement.setAttribute('class', themwa);
  }

  return (
    <>
      <Button variant='outline' className='absolute top-5 right-5' onClick={handleTheme}>Toggle Theme ({theme})</Button>
      <div className='p-5 h-screen w-full border'>
        <Button variant='outline'>Click Me</Button>

        <div className='my-4 p-3 flex justify-center flex-col items-center gap-7'>
          <Date_Picker />
        </div>
      </div>
    </>
  )
}

export default App
