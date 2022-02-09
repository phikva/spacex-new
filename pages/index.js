import heroImg from "../images/pexels-spacex-23769-min.jpg";
import { motion } from "framer-motion";
import CompanyInfo from "../components/CompanyInfo";
import NextLaunch from "../components/NextLaunch";
import LatestLaunch from "../components/LatestLaunch";
import ReactPlayer from "react-player";


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
            <div className="text-background">
            <h1>ADVANCING THE FUTURE</h1>
            <h2>
              SPACE X DESIGNS, MANUFACTURES AND LAUNCHES ADVANCED ROCKETS AND
              SPACECRAFTs{" "}
            </h2>
            </div>
            <div className="container__btn">
              <a href="#companyInfo"><button className="btn-primary" >Read More</button></a>
              <button className="btn-secondary">SpaceX History</button>
            </div>
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
