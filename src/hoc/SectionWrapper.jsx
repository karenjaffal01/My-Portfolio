import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }} //means it will only be played once and when 25% of section is visible
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 `}
      >
        <span className="hash-span" id={idName}>
          {/*when user clicks on link with that is he will get redirected to this span that wraps the component so we get redirected to the component itself */}
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
