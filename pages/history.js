import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import Historical from "../images/historical.jpg";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";


export default function History( {history}) {
    console.log(history)
  return (
    <div className="main">
      <div className="container__hero">
        <div className="hero__content">
          <div className="hero__image">
            <Image alt="spaceX rocket" src={Historical} />
          </div>
          <div className="hero__text">
            <h1>Historical events</h1>
          </div>
        </div>
      </div>
      <section className="container history">
      <Carousel 
      styles={styles}
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      showArrows={true}
      >
          {history.map((hist) =>
          
          <div className="row" key={hist.id}>
              <div className="card__content">
                  <div className="title">
                  <h2>{hist.title}</h2>
                  <h3>UTC launch date: {hist.event_date_utc}</h3>
                  </div>
                 
                  <div className="text">
                      <p>{hist.details}</p>
                  </div>
              </div>
          </div>
         
          )}
          </Carousel>
      </section>
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.spacexdata.com/v4/history"
  );
  const data = await res.json();
  if (!data) return "Loading";
  return {
    props: {
      history: data,
    },
  };
};