import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";

const Navbar = ({ selectedTab, setSelectedTab }) => {

    const [isDarkMode, setIsDarkMode] = React.useState(false);

    React.useEffect(() => {
        const mode = isDarkMode ? "dark" : "light";
        document.documentElement.setAttribute("data-bs-theme", mode);
    }, [isDarkMode]);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#">Skype Posting App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" onClick={() => setSelectedTab('Home')}>
                            <a className={`nav-link ${selectedTab === 'Home' && 'active'}`} aria-current="page" href="#" >Home</a>
                        </li>
                        <li className="nav-item" onClick={() => setSelectedTab('CreatePost')}>
                            <a className={`nav-link ${selectedTab === 'CreatePost' && 'active'}`} href="#">Create Post</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button id='theme-toggle-btn' type="button" className="btn border-secondary d-flex align-items-center" onClick={() => setIsDarkMode(prev => !prev)}>
                            {isDarkMode ? <FaLightbulb size={20} color='gold' /> : <MdDarkMode size={20} />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;