import { motion } from "motion/react";
import './App.css';
import { useState } from "react";
import Chapter1_Basics from "./chapters/Chapter1_Basics";
import Chapter2_Keyframes from "./chapters/Chapter2_Keyframes";

const chapters = {
  chapter1: <Chapter1_Basics motion={motion} />,
  chapter2: <Chapter2_Keyframes motion={motion} />,
};

function App() {

  const [chapter, setChapter] = useState('chapter1');

  return (
    <>
      <section>
        <h1>Working with Framer Motion</h1>

        <div className="container">
          <label htmlFor="chap">Select Chapter:</label>
          <select value={chapter} id="chap" onChange={(e) => setChapter(e.target.value)}>
            <option value="chapter1">1 Framer Basics</option>
            <option value="chapter2">2 Framer keyframes animations</option>
          </select>
        </div>

        <main>
          {chapters[chapter]}
        </main>

      </section>
    </>
  )
}

export default App
