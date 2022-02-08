import Image from "next/image";
import falcon9launch from "../images/falcon9launch-min_ccexpress-min.jpeg";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Falcon9({ rocket }) {
  console.log(rocket);

  const imageCarouselKey = [1, 2, 3, 4, 5, 6];

  return (
    <div className="main">
      <div className="content">
        <section className="feature">
          <div className="container__image">
            <Image src={falcon9launch} />
            <div className="feature__heading">
            <h1>{rocket.name}</h1>
            <h2>First orbital class rocket capable of reflight</h2>
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
            <div className="row">
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
    "https://api.spacexdata.com/v4/rockets/5e9d0d95eda69973a809d1ec"
  );
  const data = await res.json();
  if (!data) return "Loading";
  return {
    props: {
      rocket: data,
    },
  };
};
