import heroImg from "../images/pexels-spacex-23769.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <div className="main">
      <div className="container__hero">
        <div className="hero__content">
          <div className="hero__image">
            <Image alt="spaceX rocket"  src={heroImg} />
          </div>
          <div className="hero__text">
            <h1>ADVANCING THE FUTURE</h1>
            <h2>SPACE X DESIGNS, MANUFACTURES AND LAUNCHES ADVANCED ROCKETS AND SPACECRAFT </h2>
          </div>
          <button>Learn more</button>
        </div>
      </div>
      <section className="container company-info"></section>
        <section className="container next-launch"></section>
        <section className="container recent-launch"></section>
        <section className="container recent-mission"></section>
        <section className="container recent-mission"></section>
    </div>
  );
}
