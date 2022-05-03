import Link from "next/link";
import { motion } from "framer-motion";

//Animate
const containerFooter = {
  show: {
    transition: {
      staggerChildren: 1,
    },
  },
};
const itemFooter = {
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

export default function Footer() {
  return (
    <footer className="p-5">
      <motion.div
      className="text-center pb-5 md:grid grid-cols-2 "
        variants={containerFooter}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.div
        className="xs:pb-5 xs:block text-lg md:text-left md:flex items-end justify-center md:pb-0"
          variants={itemFooter}
          initial="hidden"
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.2,
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1.6,
            },
          }}
          exit="exit"
        >
          <div className="md:pr-5">
              <Link href="/">Home</Link>
          </div>
          <div className="md:pr-5">
              <Link href="/falcon9">Falcon 9</Link>
          </div>
          <div className="md:pr-5">
              <Link href="/falconHeavy">Falcon Heavy</Link>
          </div>
          <div className="md:pr-5">
              <Link href="/starship">Starship</Link>
          </div>
          <div className="md:pr-5">
              <Link href="/history">History</Link>
          </div>
          <div className="md:pr-5">
              <Link href="/contact">Contact</Link>
          </div>
        </motion.div>
        <motion.div
        
          variants={itemFooter}
          initial="hidden"
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.2,
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1.6,
            },
          }}
          exit="exit"
        >
          <div className="row">
            <ul className="xs:pb-5 xs:block text-lg md:text-left md:flex items-end justify-center md:pb-0">
              <li className="md:pr-5">
                <a href="https://twitter.com/elonmusk" target="_blank" rel="noreferrer">
                  {" "}
                  Twitter{" "}
                </a>
              </li>
              <li className="md:pr-5">
                <a href="https://www.youtube.com/c/SpaceX" target="_blank" rel="noreferrer">
                  {" "}
                  Youtube{" "}
                </a>
              </li>
              <li className="md:pr-5">
                <a href="https://instagram.com/spaceX" target="_blank" rel="noreferrer">
                  {" "}
                  Instagram{" "}
                </a>
              </li>
              <li className="md:pr-5">
                <a href="https://flickr.com/photos/spacex" target="_blank" rel="noreferrer">
                  {" "}
                  Flickr
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
