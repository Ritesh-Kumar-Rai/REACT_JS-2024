import { useCallback, useState, useRef } from 'react';
import isHapticOn from './ishapticOn';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './App.css';







function App() {

  // useState variables
  const [text, setText] = useState("");
  const [darkmode, setdarkmode] = useState(false);
  const textRef = useRef(null);
  const nothingtoPreview = <h5 className='text-center mt-5' style={{color:"#555569"}}>Nothing to Preview!</h5>


  function toggleCopy() {

    isHapticOn();
    if(text.length>0){

      window.navigator.clipboard.writeText(text)
      .then(() => {
        
        const range = document.createRange();
        range.selectNodeContents(textRef.current);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        
        document.getElementById('copy-toggle-span').style.display = 'inline';
        setTimeout(() => {
          document.getElementById('copy-toggle-span').style.display = 'none';
        }, 2000);
        
      }).catch((error) => {
        console.error("Error Copying Text to Clipboard! ", error);
      });
      
    }

  }


  const handleChangeText = useCallback((event) => {

    setText(event.target.value);

  }, [setText]);

  function handleUpperCase() {
    isHapticOn();
    const upperstr = text.toUpperCase();
    setText(upperstr);
  }

  function handleLowerCase() {
    isHapticOn();
    const lowerstr = text.toLowerCase();
    setText(lowerstr);
  }

  function clearText() {
    isHapticOn();
    setText("");
  }

  function handleExtraSpaces() {
    isHapticOn();
    const mtxt = text.split(/[  ]+/);
    setText(mtxt.join(" "));
  }

  return (
    <>
      <Navbar setterForDark={setdarkmode} />


      <div className='container mt-5 py-2 rounded'>
        <h1 className='mt-5 text-center'>TextUtils</h1>

        <div className="container mt-5">

          <div className="mb-3 mt-5">

            <label htmlFor="exampleFormControlTextarea1" className="form-label">Try TextUtils - word counter, character counter, remove extra spaces</label>


            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleChangeText} rows="7" style={darkmode ? { backgroundColor: "rgb(24, 24, 58)", color: "white" } : { backgroundColor: "white" }}></textarea>
            <div className='d-lg-flex justify-content-end '>
              <span className="badge rounded-pill text-bg-dark mx-2 my-1">Words : {text.split(/\s+/).filter(item => item.length !== 0).length}</span>
              <span className="badge rounded-pill text-bg-dark mx-2 my-1"> Characters : {text.length}</span>
              <span className="badge rounded-pill text-bg-info my-1">Read Time : {0.008 * text.split(/\s+/).filter(item => item.length !== 0).length} in Minutes</span>
            </div>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleUpperCase}>UPPERCASE</button>
          <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleLowerCase}>lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-3 my-2">Title Case</button>
          <button disabled={text.length===0} className="btn btn-primary mx-3 my-2">Sentence case</button>
          <button disabled={text.length===0} className="btn btn-warning mx-3 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button disabled={text.length===0} className="btn btn-danger mx-3 my-2" onClick={clearText}>Clear Text</button>
        </div>

        {/* Summary Text */}
        <div className="container mt-5 my-5 border rounded">
          <div className='d-flex justify-content-between align-items-center border-bottom'>
            <h4>Final Result :</h4>
            <div>
              <i className="ri-clipboard-line" onClick={toggleCopy}></i>
              <span id='copy-toggle-span' className="badge rounded-pill text-bg-dark mx-1 my-1" style={{ display: 'none' }}>copied!</span>
            </div>
          </div>
          <div className="container" ref={textRef} style={{ minHeight: '20vh' }}>{text.length>0 ? text : nothingtoPreview}</div>

        </div>

      </div>

      <Footer isdark={darkmode}/>
    </>
  )
}

export default App
