import Image from "next/image";
import starship from "../images/starship-min_ccexpress-min.jpeg";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
//Animate

//Hero
const containerHero = {
  show: {
    transition: {
      staggerChildren: 0.5,
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

export default function Starship({ rocket }) {
  console.log(rocket);

  const imageCarouselKey = [1, 2, 3, 4, 5, 6];

  return (
    <div className="main">
       <motion.div
        className="content"
        variants={containerHero}
        initial="hidden"
        animate="show"
        exit="exit"
      >
      <div className="content">
        <section className="feature">
          <div className="container__image starship">
          <motion.div variants={itemHeroImg}>
          <div className="background starship"></div>
          </motion.div>
          
            <div className="feature__heading">
            <motion.div variants={itemHero}>
            <h1>{rocket.name}</h1>
            </motion.div>
            <motion.div variants={itemHero}>
            <h2>world’s most powerful launch vehicle</h2>
            </motion.div>
            </div>
           
          </div>
        </section>
        <section className="stats">
          <div className="container__stats">
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
            <div className="row">
              <span> <h3>Cost per launch:
          ${rocket.cost_per_launch.toLocaleString()}</h3></span>
            </div>
            </motion.div>
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
            <div className="row">
              <span> <h3>Country:
              {rocket.country}</h3></span>
            </div>
            </motion.div>
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
            <div className="row">
              <span><h3>First flight:
             {rocket.first_flight}</h3></span>
            </div>
            </motion.div>
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
            <div className="row description">
              <span>{rocket.description}</span>
            </div>
            </motion.div>
          </div>
        </section>
        <section className="overview">
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
            showIndicators={false}
            showArrows={true}
            infiniteLoop={true}
          >
            <div className="section-inner">
              <div className="inner-content">
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
                <h2>{rocket.name}</h2>
                <h3>Overview</h3>
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
                <table>
                  <tbody>
                    <tr>
                      <td>Height</td>
                      <td>
                        {rocket.height.meters} m{" "}
                        <span>/{rocket.height.feet} ft</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Diameter</td>
                      <td>
                        {rocket.diameter.meters} m{" "}
                        <span>/{rocket.diameter.feet} ft</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Mass</td>
                      <td>
                        {rocket.mass.kg.toLocaleString()} kg{" "}
                        <span>/{rocket.mass.lb.toLocaleString()} lb</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Payload to Leo</td>
                      <td>
                        {rocket.payload_weights[0].kg.toLocaleString()} kg{" "}
                        <span>
                          /{rocket.payload_weights[0].lb.toLocaleString()} lb
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Payload to Gto</td>
                      <td>
                        {rocket.payload_weights[1].kg.toLocaleString()} kg{" "}
                        <span>
                          /{rocket.payload_weights[1].lb.toLocaleString()} lb
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Payload to Mars</td>
                      <td>
                        {rocket.payload_weights[2].kg.toLocaleString()} kg{" "}
                        <span>
                          /{rocket.payload_weights[2].lb.toLocaleString()} lb
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </motion.div>
              </div>
            </div>
            <div className="section-inner">
              <div className="inner-content">
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
                <h2>{rocket.name}</h2>
                <h3>First stage</h3>
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
                <table>
                  <tbody>
                    <tr>
                      <td>Burn time</td>
                      
                      <td>{rocket.first_stage.burn_time_sec} sec</td>
                    </tr>
                    <tr>
                      <td>Engines</td>
                      <td>{rocket.first_stage.engines} </td>
                    </tr>
                    <tr>
                      <td>Fuel amount</td>
                      <td>{rocket.first_stage.fuel_amount_tons} tons </td>
                    </tr>
                    <tr>
                      <td>Landing legs</td>
                      <td>{rocket.landing_legs.material} </td>
                    </tr>
                    <tr>
                      <td>Number of legs</td>
                      <td>{rocket.landing_legs.number} </td>
                    </tr>
                  </tbody>
                </table>
                </motion.div>
              </div>
            </div>
            <div className="section-inner">
              <div className="inner-content">
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
                <h2>{rocket.name}</h2>
                <h3>Second stage</h3>
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
                <table>
                  <tbody>
                    <tr>
                      <td>Burn time</td>
                      <td>{rocket.second_stage.burn_time_sec} sec</td>
                    </tr>
                    <tr>
                      <td>Engines</td>
                      <td>{rocket.second_stage.engines} </td>
                    </tr>
                    <tr>
                      <td>Fuel amount</td>
                      <td>{rocket.second_stage.fuel_amount_tons} tons </td>
                    </tr>
                  </tbody>
                </table>
                </motion.div>
              </div>
            </div>
          </Carousel>
          </motion.div>
        </section>
  
        <section className="gallery">
          <Carousel
            styles={styles}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={true}
            infiniteLoop={true}
          >
            {rocket.flickr_images.map((img) => 
                <div className="section-inner">
                <div className="inner-content">
            <div key={imageCarouselKey}>
              <img src= {img} />
              </div>
              </div>
            </div>
            )}
          
          </Carousel>
        </section>
        
      </div>
      </motion.div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.spacexdata.com/v4/rockets/5e9d0d96eda699382d09d1ee"
  );
  const data = await res.json();
  if (!data) return "Loading";
  return {
    props: {
      rocket: data,
    },
  };
};
