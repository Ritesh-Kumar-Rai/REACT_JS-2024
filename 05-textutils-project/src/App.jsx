import { useCallback, useState} from 'react'
import isHapticOn from './ishapticOn';
import './App.css'







function App() {

  // useState variables
  const [text, setText] = useState("");


  function toggleCopy(event){

        isHapticOn();    
        document.getElementById('copy-toggle-span').style.display = 'inline';
        setTimeout(()=>{
          document.getElementById('copy-toggle-span').style.display = 'none';
        },2000);
  }

    
  const handleChangeText = useCallback((event)=>{
    
        setText(event.target.value);

      },[setText]);

  function handleUpperCase(){
    isHapticOn();
    const upperstr = text.toUpperCase();
    setText(upperstr);
  }    

  function handleLowerCase(){
    isHapticOn();
    const lowerstr = text.toLowerCase();
    setText(lowerstr);
  }

  function clearText(){
    isHapticOn();
    setText("");
  }

  function handleExtraSpaces(){
      const mtxt = text.split(/[  ]+/);
      setText(mtxt.join(" "));
  }

  return (
    <>

      <div className='container mt-5 py-2 rounded'>
        <h1 className='mt-5 text-center'>TextUtils</h1>

        <div className="container mt-5">
          
          <div className="mb-3 mt-5">

            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            
            
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleChangeText} rows="7"></textarea>
            <div className='d-lg-flex justify-content-end '>
            <span className="badge rounded-pill text-bg-dark mx-2 my-1">Words : {text.split(" ").length}</span>
            <span className="badge rounded-pill text-bg-dark mx-2 my-1"> Characters : {text.length}</span>
            <span className="badge rounded-pill text-bg-info my-1">Read Time : {0.008 * text.split(" ").length} in Minutes</span>
            </div>
          </div>
          <button className="btn btn-primary mx-3 my-2" onClick={handleUpperCase}>UPPERCASE</button>
          <button className="btn btn-primary mx-3 my-2" onClick={handleLowerCase}>lowercase</button>
          <button className="btn btn-primary mx-3 my-2">Title Case</button>
          <button className="btn btn-primary mx-3 my-2">Sentence case</button>
          <button className="btn btn-warning mx-3 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button className="btn btn-danger mx-3 my-2" onClick={clearText}>Clear Text</button>
        </div>

      {/* Summary Text */}
      <div className="container mt-5 my-5 border rounded">
          <div className='d-flex justify-content-between align-items-center border-bottom'>
            <h4>Final Result :</h4>
            <div>
            <i className="ri-clipboard-line" onClick={toggleCopy}></i>
            <span id='copy-toggle-span' className="badge rounded-pill text-bg-dark mx-1 my-1" style={{display:'none'}}>copied!</span>
        </div>
          </div>
        <div className="container" style={{minHeight:'20vh'}}>{text}</div>
          
      </div>

      </div>
    </>
  )
}

export default App
