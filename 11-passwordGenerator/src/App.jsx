import { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from './Components/Navbar';


function App() {

  const [length, setlength] = useState(8);
  const [password, setpassword] = useState("");
  const [isNumeric, setisNumeric] = useState(false);
  const [isSpecial, setisSpecial] = useState(false);
  const pRef = useRef(null); // reference for input tags


  const handleRange = useCallback((e)=>{
      setlength(e.target.value);
  },[length, setlength]);

  function copyToClipboard(){
      window.navigator.clipboard.writeText(password);
      pRef.current?.select();

  }

  const generatePassword = useCallback(()=>{
          let pass = "";
          let str = "ABCDEFGHIJKLMNOPQRSRTUVWXYZabcdefghijklmnopqrtsuvwxyz";

          if(isNumeric) str+= "0123456789";

          if(isSpecial) str+= "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

          for (let i = 0; i<length; i++) {
            const char = Math.floor(Math.random() * str.length +1);
            pass += str.charAt(char);
            
          }
          setpassword(pass);
          
  },[length, isNumeric, isSpecial, setpassword]);

  // invoke useCallback function instantly when page loads
  useEffect(() => {
      generatePassword();
  }, [length,isNumeric,isSpecial,setpassword])
  

  return (
    <>
      <Navbar />
      <div className="main flex justify-center bg-indigo-800 h-screen p-10">
        <div className='bg-indigo-500 p-3 h-1/4 w-1/2 rounded-xl'>
          <h1 className='text-3xl text-center text-slate-100'>Password Generator</h1>
          <div className='p-5 text-center'>
            <input type="text" value={password} className='w-3/4 h-7 p-5 pr-8 text-2xl bg-indigo-500 text-white border-2 border-indigo-950 rounded-lg' ref={pRef} readOnly/>
            <button type="button" className='relative -left-10 -top-1  text-lg px-1.5 m-2 rounded-lg' onClick={copyToClipboard} ><i className="ri-clipboard-line hover:text-white"></i></button>
          </div>
          <div className='p-5 flex text-2xl text-slate-100 justify-around items-center'>
            <div>
              <input type="range" className='range accent-red-900 mx-2' id="range" value={length} min={8} max={64} onChange={handleRange} />
              <label htmlFor="range">length({length})</label>
            </div>

            <div>
              <input type="checkbox" className="mx-2" id="number" onClick={()=>{ setisNumeric(prev => !prev)}} />
              <label htmlFor="number">Numeric</label>
            </div>

            <div>
              <input type="checkbox" className="mx-2" id="special" onClick={()=>{ setisSpecial(prev => !prev)}} />
              <label htmlFor="special">Special Symbols</label>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default App
