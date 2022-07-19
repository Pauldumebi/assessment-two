import React from "react";
import { motion } from "framer-motion";
import Home from "./Home";
const App = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      <Home />
    </motion.div>
  );
};

export default App;