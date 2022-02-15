import useSWR from "swr";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFlickr } from "@fortawesome/free-brands-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";
import purpleBackground from "../images/purpleBackground.jpg";
import { motion } from "framer-motion";

const fetcher = async () => {
  const response = await fetch("https://api.spacexdata.com/v4/company");
  const data = await response.json();
  //   console.log(data.links);
  return data;
};

//Animate

//Company
const containerCompany = {
  show: {
    transition: {
      staggerChildren: 1,
    },
  },
};
//text
const itemCompany = {
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
//ICONS
const itemCompanyIcons = {
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

function CompanyInfo() {
  const { data, error } = useSWR("company", fetcher);

  if (error) return "An error has occured";

  if (!data) return "Loading";

  return (
    <motion.div
      className="content"
      variants={containerCompany}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div
        variants={itemCompany}
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
        <div className="section__title">
          <h2>Company Info</h2>
        </div>
      </motion.div>
      <motion.div
      className="row name container"
        variants={itemCompany}
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
        
      <div className="row name">
        <span>
          <h3>Name: {data.name}</h3>
          <h3>Ceo: {data.ceo}</h3>
        </span>
      </div>
      </motion.div>
      <motion.div
        className="row info container"
        variants={itemCompany}
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
      <div className="row info">
        <span>
          <h3>Employees: {data.employees}</h3>
          <h3>Founded: {data.founded}</h3>
          <h3>Valuation: ${data.valuation.toLocaleString()}</h3>
        </span>
      </div>
      </motion.div>
      <motion.div
        className="row summary container"
        variants={itemCompany}
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
      <div className="row summary">
        <span>
          <p>{data.summary}</p>
        </span>
      </div>
      
      </motion.div>
      <div className="row socials">
      <motion.div
        variants={itemCompanyIcons}
        initial="hidden"
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 1,
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
          },
        }}
        exit="exit"
      >
        <div className="social-icons">
          <a href="https://twitter.com/elonmusk" target="_blank">
            <FontAwesomeIcon size="2x" icon={faTwitter} Link />
            {data.links.elon_twitter}
          </a>
        </div>
        </motion.div>
        <motion.div
        variants={itemCompanyIcons}
        initial="hidden"
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 1.2,
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
          },
        }}
        exit="exit"
      >
        <div className="social-icons">
          <a href="https://twitter.com/SpaceX" target="_blank">
            <FontAwesomeIcon size="2x" icon={faTwitter} Link />
            {data.links.twitter}
          </a>
        </div>
        </motion.div>
        <motion.div
        variants={itemCompanyIcons}
        initial="hidden"
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 1.4,
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
          },
        }}
        exit="exit"
      >
        <div className="social-icons">
          <a href="https://flickr.com/photos/SpaceX" target="_blank">
            <FontAwesomeIcon size="2x" icon={faFlickr} Link />
            {data.links.flickr}
          </a>
        </div>
        </motion.div>
        <motion.div
        variants={itemCompanyIcons}
        initial="hidden"
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 1.6,
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
          },
        }}
        exit="exit"
      >
        <div className="social-icons">
          <a href="https://spacex.com" target="_blank">
            <FontAwesomeIcon size="2x" icon={faChrome} Link />
            {data.links.website}
          </a>
        </div>
        </motion.div>
      </div>
      <motion.div
        variants={itemCompany}
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
      <div className="section-bottom-img">
        <Image alt="spaceX-rocket" src={purpleBackground} placeholder="blur" />
      </div>
      </motion.div>
    </motion.div>
  );
}
export default CompanyInfo;
