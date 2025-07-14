import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // This includes Popper.js too!
import './App.css';
import Offcanvas from "./components/Offcanvas";

function App() {

  return (
    <React.Fragment>


      <h1 className="text-center fw-bold">Hare Krsna</h1>
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">An active item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>

      <Offcanvas />
    </React.Fragment>
  )
}

export default App
