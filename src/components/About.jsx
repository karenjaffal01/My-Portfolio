import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 1.5)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card max-w-[300px] mx-auto"
    >
      <div
        options={{
          //configures tilt effect where max angle is 45deg and scale1 means no zoom and speed 450 ms
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=" bg-tertiary rounded-[20px] py-3 px-12 min-h-[250px]  flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <h2 className={styles.sectionHeadText}>
          About <span className="text-violet-500">Me</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("right", "", 0.5, 1.5)}
        className="mt-4 text-secondary text-[20px] xl:text-[25x] max-w-3xl xl:leading-[40px] leading-[30px]"
      >
        I'm driven by challenges and I have a passion for continuous growth. My
        journey in technology has taken me from mastering front-end frameworks
        like React to diving into backend development then to Machine Learning
        and AWS cloud services. I love exploring new tools, frameworks, and
        concepts to stay at the forefront of the tech world.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
