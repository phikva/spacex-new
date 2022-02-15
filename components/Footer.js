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
    <footer>
      <motion.div
        variants={containerFooter}
        initial="hidden"
        animate="show"
        exit="exit"
      >
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
            <button className="btn">
              <Link href="/contact">Contact</Link>
            </button>
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
            <ul>
              <li>
                <a href="https://twitter.com/elonmusk" target="_blank">
                  {" "}
                  Twitter{" "}
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/c/SpaceX" target="_blank">
                  {" "}
                  Youtube{" "}
                </a>
              </li>
              <li>
                <a href="https://instagram.com/spaceX" target="_blank">
                  {" "}
                  Instagram{" "}
                </a>
              </li>
              <li>
                <a href="https://flickr.com/photos/spacex" target="_blank">
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
