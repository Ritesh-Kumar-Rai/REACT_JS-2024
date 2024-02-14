import { useState } from "react";
import isHapticOn from "../ishapticOn";

// Bootstrap Navbar
function Navbar(props) {
    
      // function for dark mode
      function handleDarkMode() {
        isHapticOn();
        if(darmode === "light"){
            setDarMode("dark");
            setLableMsg("Enable Light Mode");
            props.setterForDark(true);
            document.body.style.backgroundColor="rgb(46, 46, 70)"; 
            document.body.style.color="white"; 
            
        }else{
            setDarMode("light");
            setLableMsg("Enable Dark Mode");
            props.setterForDark(false);
            document.body.style.backgroundColor="white"; 
            document.body.style.color = "black";
        }
        
        if(textmode === "dark"){
            setTextMode("light");
        }else{
            setTextMode("dark");
        }
    }
    
    
    const [darmode, setDarMode] = useState('light');
    const [textmode, setTextMode] = useState('dark');
    const [lablemsg, setLableMsg] = useState("Enable Dark Mode");

    return (
        <nav className={`navbar navbar-expand-lg bg-${darmode} navbar-${darmode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" onClick={isHapticOn}>Text-Utils</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={isHapticOn}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={isHapticOn}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={isHapticOn}>About</a>
                        </li>

                    </ul>
                    
                    <div className={`form-check form-switch text-${textmode}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={handleDarkMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{lablemsg}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar