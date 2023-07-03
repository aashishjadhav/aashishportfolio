import React from "react";
import { motion } from "framer-motion";
import { AiFillAndroid, AiFillIeCircle, AiFillJava, AiFillWindows } from "react-icons/ai";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Skills</h2>
      <section>
      <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>Fresher</h3>
          

        </motion.div>

        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <AiFillAndroid/>
          <span>Java</span>
        </motion.div>

        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <AiFillIeCircle />
          <span>
            <h1>Web Development</h1>
               <li>ReactJs</li> 
                <li>Javascript</li>
                <li>Css</li>
                <li>Html</li>
          </span>
        </motion.div>

        
      
        
      </section>
    </div>
  );
};

export default Services;