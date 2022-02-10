import useSWR from "swr";
import { motion } from "framer-motion";


const fetcher = async () => {
  const response = await fetch(
    "https://api.spacexdata.com/v5/launches/upcoming"
  );
  const data = await response.json();
  // console.log(data);
  return data;
};

//Animate

//Hero
const containerUpcoming = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const itemUpcoming = {
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


function NextLaunch() {
  const { data, error } = useSWR("upcoming", fetcher);

  if (error) return "An error has occured";

  if (!data) return "Loading";

  return (
    <motion.div className="content"
    variants={containerUpcoming}
    initial="hidden"
    animate="show"
    exit="exit"
    >
       <motion.div 
       variants={itemUpcoming} 
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
        <h2>Upcoming Launches</h2>
        </div>
        </motion.div>
      {data.map((launch) =>
        launch.details ? (
          <div key={launch.id} className="row">
             <div className="card__content"> 
             <motion.div 
       variants={itemUpcoming} 
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
             <div className="title"> 
             <h3>Name: {launch.name}</h3>
             </div>
             </motion.div>
             <motion.div 
       variants={itemUpcoming} 
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
             <div className="text">
             <p>{launch.details}</p>
             </div>
             </motion.div>
             </div>
          </div>
        ) : (
            <div key={launch.id} className="row">
                <div className="card__content">
                <motion.div 
       variants={itemUpcoming} 
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
                <div className="title"> 
                <h3>Name: {launch.name}</h3>
                </div>
                </motion.div>
                <motion.div 
       variants={itemUpcoming} 
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
                <div className="text">
              <p>No details available for this launch</p>
              </div>
              </motion.div>
                    </div>
            </div>
          )
      )}
    </motion.div>
  );
}
export default NextLaunch;
