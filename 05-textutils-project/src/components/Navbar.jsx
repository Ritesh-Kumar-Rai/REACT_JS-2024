import { useState } from "react";
import isHapticOn from "../ishapticOn";

// Bootstrap Navbar
function Navbar() {
    
    // function for dark mode
    function handleDarkMode(event) {
        isHapticOn();
        if(darmode === "light"){
            setDarMode("dark");
            setLableMsg("Enable Light Mode");
        }else{
            setDarMode("light");
            setLableMsg("");
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
                <a className="navbar-brand" href="#">Text-Utils</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>

                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
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