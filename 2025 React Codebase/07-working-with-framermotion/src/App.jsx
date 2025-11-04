import { motion } from "motion/react";
import './App.css';

function App() {

  return (
    <>
      <section>
        <h1>Working with Framer Motion</h1>

        <motion.div className="box"
          animate={{
            x: 100,
            rotate: 360
          }}
          transition={{
            delay: 2,
            duration: 1
          }}>
        </motion.div>
      </section>
    </>
  )
}

export default App
