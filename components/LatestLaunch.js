import useSWR from "swr";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const fetcher = async () => {
  const response = await fetch("https://api.spacexdata.com/v5/launches/latest");
  const data = await response.json();
  console.log(data);
  return data;
};

//Animate

//Latest
const containerLatest = {
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
//ITEMS
const itemLatest = {
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


function LatestLaunch() {
  const { data, error } = useSWR("latest", fetcher);

  if (error) return "An error has occured";

  if (!data) return "Loading";
  const video = data.links.webcast;
  return (

    <motion.div className="flex flex-col py-32 px-5 text-center md:text-left md:grid grid-cols-2 xl:px-30 "
    variants={containerLatest}
    initial="hidden"
    animate="show"
    exit="exit"
    >
       <motion.div
       className="col-start-2 row-span-2 text-center self-center"
        variants={itemLatest}
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
      <div className="">
        <h2>Latest launch</h2>
      </div>
      <div className="title"> 
        <h3>Name: {data.name}</h3>
        </div>
      </motion.div>
      <div className="col-start-1">
        <div className="card__content">
        <motion.div
        variants={itemLatest}
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
    
        </motion.div>
        <motion.div
        className=""
        variants={itemLatest}
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
          <div className='player-wrapper'>
          <ReactPlayer url={video} 
          className="latest_launch"
          width="100%"
          // height="250px"
          controls="true"
          />
          </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default LatestLaunch;
