import heroImg from "../images/pexels-spacex-23769-min.jpg";
import { motion } from "framer-motion";
import CompanyInfo from "../components/CompanyInfo";
import NextLaunch from "../components/NextLaunch";
import LatestLaunch from "../components/LatestLaunch";
import ReactPlayer from "react-player";
import Image from "next/dist/client/image";
import stars from "../images/purpleBackground.jpg";

//Animate

//Hero
const containerHero = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const itemHero = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
const itemHeroButtons = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    x: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
export default function Home() {
  return (
    <div className="main">
      
        <div className="hero bg-cover h-screen bg-center">
        

          <div className="absolute bottom-1/3 text-center xs:px-5 xl:text-left xl:px-60">
            <motion.div
              className="text-background"
              variants={containerHero}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.div variants={itemHero}>
                <h1 className="pb-5">ADVANCING THE FUTURE</h1>
                <h2 className="pb-5 xl:w-1/2">
                  SPACE X DESIGNS, MANUFACTURES AND LAUNCHES ADVANCED ROCKETS
                  AND SPACECRAFTs
                </h2>
              </motion.div>

              <div className="flex justify-center xl:justify-start">
                <motion.div variants={itemHeroButtons}>
                  <a href="#companyInfo">
                    <button className="btn-primary ">Read More</button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
       
      </div>

      <section id="companyInfo" className="">
        <CompanyInfo />
      </section>
      <section className="">
        <NextLaunch />
      </section>
      <section className="">
        <LatestLaunch />
      </section>
    </div>
  );
}
