import { useState } from "react";

import "./App.css";

function App() {

//  let counter = 0;

  function incrementC(){
    // counter++;
    if(counter<20) setCounter(counter = counter+1);
    console.log(counter);
  }

  function decrementC(){
    // counter--;
    if(counter > 0) setCounter(counter = counter-1)
    console.log(counter);
  }

  let [counter, setCounter] = useState(0);

  return (
    <div id="main">
      <h3>counter {counter}</h3>
      <div>
        <button onClick={incrementC}>Increment({counter})</button>
        <button onClick={decrementC}>Decrement({counter})</button>
      </div>
    </div>
  )
}

export default App
