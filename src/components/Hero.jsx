import { socialMedia } from "../constants";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full md:h-screen h-[400px] mx-auto`}>
      <div
        className={`absolute inset-0 top-[80px] max-w-9xl ${styles.paddingX} flex flex-row lg:items-start xxl:items-center lg:mt-[70px] justify-center gap-3 sm:items-center`}
      >
        <div className="flex flex-row items-start justify-center">
          <div className="flex flex-col justify-center items-center mt-5 ml-5">
            <div className="w-5 h-5 rounded-full bg-[#5805a1]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="ml-5 mr-5 ">
            <h1
              className={`${styles.heroHeadText} text-white text-nowrap typing-effect `}
            >
              Hi, I'm <span className="text-violet-500">Karen</span>
            </h1>
            <p
              className={`${styles.heroSubText} text-white-100 md:max-w-[600px] xxl:max-w-7xl max-w-[400px]`}
            >
              <span className="sm:text-nowrap">
                I am a web developer and an AI enthusiast&nbsp;
              </span>
              <br className="xs:block hidden" />
              skilled in building dynamic websites using the MERN stack and
              three.js for interactive 3D experiences and enhancing my machine
              learning knowledge to combine these two worlds.
            </p>
            <div className="flex items-start gap-5 mt-8">
              {socialMedia.map((icon) => (
                <div
                  className="flex justify-center items-center w-12 h-12 rounded-full icon-container"
                  key={icon.alt}
                >
                  <a href={icon.link} target="_blank">
                    <img
                      className="icons"
                      src={icon.src}
                      alt={icon.alt}
                      width={24}
                      height={24}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ComputersCanvas className="max-sm:hidden" />
      </div>
    </section>
  );
};

export default Hero;
