
import { Carousel } from "react-responsive-carousel";

import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";

//Animate

//Hero
const containerHero = {
  show: {
    transition: {
      staggerChildren: 1,
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
const itemHeroImg = {
  hidden: {
    opacity: 0,
    scale: 0.2,
    y: 200,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    scale: 1,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
export default function History({ history }) {
  console.log(history);
  return (
    <div className="main">
       <motion.div
        className="content"
        variants={containerHero}
        initial="hidden"
        animate="show"
        exit="exit"
      >
      <div className="container__hero history">
        <div className="hero__content">
          <div className="hero__image">
          <motion.div variants={itemHeroImg}>
            <div className="background history"></div>
            </motion.div>
          </div>
          <div className="hero__text">
          <motion.div variants={itemHero}>
            <h1>History</h1>
            </motion.div>
          </div>
        </div>
      </div>
      <section className="container history">
      <motion.div
              variants={itemHero}
              initial="hidden"
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  ease: [0.6, 0.01, -0.05, 0.95],
                  duration: 1.6,
                },
              }}
              exit="exit"
            >
        <Carousel
          styles={styles}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          showArrows={true}
        >
          {history.map((hist) => (
            <div className="row" key={hist.id}>
               <motion.div
              variants={itemHero}
              initial="hidden"
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  ease: [0.6, 0.01, -0.05, 0.95],
                  duration: 1.6,
                },
              }}
              exit="exit"
            >
              <div className="card__content">
                <div className="title">
                <motion.div
              variants={itemHero}
              initial="hidden"
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  ease: [0.6, 0.01, -0.05, 0.95],
                  duration: 1.6,
                },
              }}
              exit="exit"
            >
                  <h2>{hist.title}</h2>
                  </motion.div>
                  <motion.div
              variants={itemHero}
              initial="hidden"
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4,
                  ease: [0.6, 0.01, -0.05, 0.95],
                  duration: 1.6,
                },
              }}
              exit="exit"
            >
                  <h3>UTC launch date: {hist.event_date_utc}</h3>
                  </motion.div>
                </div>

                <div className="text">
                <motion.div
              variants={itemHero}
              initial="hidden"
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.6,
                  ease: [0.6, 0.01, -0.05, 0.95],
                  duration: 1.6,
                },
              }}
              exit="exit"
            >
                  <p>{hist.details}</p>
                  </motion.div>
                </div>
              </div>
              </motion.div>
            </div>
          ))}
        </Carousel>
        </motion.div>
      </section>
      </motion.div>
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch("https://api.spacexdata.com/v4/history");
  const data = await res.json();
  if (!data) return "Loading";
  return {
    props: {
      history: data,
    },
  };
};
