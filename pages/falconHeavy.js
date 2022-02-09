import Image from "next/image";
import falconHeavy2 from "../images/falconHeavy2-min_ccexpress-min.jpeg";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function FalconHeavy({ rocket }) {
  console.log(rocket);

  const imageCarouselKey = [1, 2, 3, 4, 5, 6];

  return (
    <div className="main">
      <div className="content">
        <section className="feature">
          <div className="container__image falconHeavy">
            {/* <Image src={falconHeavy2} 
            placeholder="blur"
            /> */}
            <div className="feature__heading">
            <h1>{rocket.name}</h1>
            <h2>The world's most powerful rocket</h2>
            </div>
           
          </div>
        </section>
        <section className="stats">
          <div className="container__stats">
            <div className="row">
              <span>Cost per launch:</span>
              <span>${rocket.cost_per_launch.toLocaleString()}</span>
            </div>
            <div className="row">
              <span>Country:</span>
              <span>{rocket.country}</span>
            </div>
            <div className="row">
              <span>First flight:</span>
              <span>{rocket.first_flight}</span>
            </div>
            <div className="row description">
              <span>{rocket.description}</span>
            </div>
          </div>
        </section>
        <section className="overview">
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
                <h2>{rocket.name}</h2>
                <h3>Overview</h3>
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
              </div>
            </div>
            <div className="section-inner">
              <div className="inner-content">
                <h2>{rocket.name}</h2>
                <h3>First stage</h3>
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
              </div>
            </div>
            <div className="section-inner">
              <div className="inner-content">
                <h2>{rocket.name}</h2>
                <h3>Second stage</h3>
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
              </div>
            </div>
          </Carousel>
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
            <div key={imageCarouselKey}>
              <img src= {img} />
            </div>
            )}
          
          </Carousel>
        </section>
        
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.spacexdata.com/v4/rockets/5e9d0d95eda69974db09d1ed"
  );
  const data = await res.json();
  if (!data) return "Loading";
  return {
    props: {
      rocket: data,
    },
  };
};
