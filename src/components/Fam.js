import * as React from "react";
import { motion } from "framer-motion";

const Fam = () => ( 
  <div className="body"> 
  <motion.div 
    className="container" 
    whileHover={{ scale: 2, rotate: 360 }}
    initial={{ scale: 0 }}
    animate={{ rotate: 180, scale: 1 }}
    transition={{
      type: "bounce",
      stiffness: 260,
      damping: 20
    }}
  />
  </div>
);

export default Fam