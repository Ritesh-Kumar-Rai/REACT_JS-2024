import { motion } from "motion/react";
import './App.css';
import { useState } from "react";
import { Chapter1_Basics, Chapter2_Keyframes, Chapter3_HovertapEffect } from "./chapters";


const chapters = {
  chapter1: <Chapter1_Basics motion={motion} />,
  chapter2: <Chapter2_Keyframes motion={motion} />,
  chapter3: <Chapter3_HovertapEffect motion={motion} />
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
            <option value="chapter3">3 Framer Hover & Tap Animate</option>
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
