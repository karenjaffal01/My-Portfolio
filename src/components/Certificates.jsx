import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { cert } from "../assets";

const CertificateCard = ({
  text,
  link,
  designation,
  image,
  company,
  index,
  id,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 1.5)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] md:w-full lg:w-[300px] transform transition-transform hover:shadow-md hover:shadow-violet-900"
    >
      <h3 className="text-white font-bold text-[20px]">{designation}</h3>
      <div className="flex justify-start items-center mt-5">
        <img
          src={image}
          alt={`logo`}
          className="rounded-full object-cover w-[40px]"
        />
        <p className="text-white ml-7">{company}</p>
      </div>
      <p className="text-secondary text-[14px] mt-3">{text}</p>
      <div
        className=" mt-5 flex justify-center items-center cursor-pointer hover:scale-105 pr-14 "
        role="button"
        onClick={() => window.open(link, "_blank")}
      >
        <img src={cert} alt="certificate" />
        <p className="text-blue-500 ml-2 w-[30px] text-nowrap ">See Badge</p>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant(0.3)}>
          <p className={styles.sectionHeadText}>
            My <span className="text-violet-500">Certificates</span>
          </p>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.id}
            index={index} // Passing index as a prop here
            {...certificate}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "");
