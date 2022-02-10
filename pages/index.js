import heroImg from "../images/pexels-spacex-23769-min.jpg";
import { motion } from "framer-motion";
import CompanyInfo from "../components/CompanyInfo";
import NextLaunch from "../components/NextLaunch";
import LatestLaunch from "../components/LatestLaunch";
import ReactPlayer from "react-player";

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
      ease: [.6, .01, -.05, .95],
      duration: 1.6
    }
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    }
  }
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
      ease: [.6, .01, -.05, .95],
      duration: 1.6
    }
  },
  exit: {
    opacity: 0,
    x: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    }
  }
};
export default function Home() {
  return (
    <div className="main">
      <div className="container__hero home">
        <div className="hero__content">
          <ReactPlayer
            className="header_video"
            playing="true"
            loop="true"
            width="100%"
            height="100%"
            muted="true"
            url={[
              "https://firebasestorage.googleapis.com/v0/b/spacex-35c8c.appspot.com/o/headerBackground.mp4?alt=media&token=81d265d3-4ed7-4fde-81c5-5dd8e3570e01",
            ]}
          />

          <div className="hero__text">
            <motion.div className="text-background" 
            variants={containerHero}
            initial="hidden"
            animate="show"
            exit="exit"
            > 
            <motion.div variants={itemHero} >
              <h1>ADVANCING THE FUTURE</h1>
              </motion.div>
              <motion.div variants={itemHero} >
              <h2>
                SPACE X DESIGNS, MANUFACTURES AND LAUNCHES ADVANCED ROCKETS AND
                SPACECRAFTs
              </h2>
              </motion.div>

             
              <div className="container__btn">
              <motion.div variants={itemHeroButtons} >
                <a href="#companyInfo" >
                  <button className="btn-primary">Read More</button>
                </a>
                </motion.div>
                <motion.div variants={itemHeroButtons} >
                <button className="btn-secondary">SpaceX History</button>
                </motion.div>
              </div>
              

            </motion.div>
          </div>
        </div>
      </div>

      <section id="companyInfo" className="container company-info">
        <CompanyInfo />
      </section>
      <section className="container upcoming-launch">
        <NextLaunch />
      </section>
      <section className="container latest-launch">
        <LatestLaunch />
      </section>
    </div>
  );
}
