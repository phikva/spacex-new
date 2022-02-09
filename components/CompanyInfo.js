import useSWR from "swr";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFlickr } from "@fortawesome/free-brands-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";
import purpleBackground from "../images/purpleBackground.jpg";


const fetcher = async () => {
  const response = await fetch("https://api.spacexdata.com/v4/company");
  const data = await response.json();
  //   console.log(data.links);
  return data;
};

function CompanyInfo() {
  const { data, error } = useSWR("company", fetcher);

  if (error) return "An error has occured";

  if (!data) return "Loading";

  return (
    <div className="content">
      <div className="section__title">
        <h2>Company Info</h2>
      </div>
      <div className="row">
      <span>
        <h3>Name: {data.name}</h3>
        <h3>Ceo: {data.ceo}</h3>
        </span>
      </div>
      <div className="row">
      <span>
        <h3>Employees: {data.employees}</h3>
        <h3>Founded: {data.founded}</h3>
        <h3>Valuation: ${data.valuation.toLocaleString()}</h3>
        </span>
      </div>
      <div className="row summary">
      <span>
        <p>{data.summary}</p>
        </span>
      </div>
      <div className="row socials">
        <div className="social-icons">
          <a href="https://twitter.com/elonmusk" target="_blank">
            <FontAwesomeIcon size="2x" icon={faTwitter} Link />
            {data.links.elon_twitter}
          </a>
        </div>
        <div className="social-icons">
          <a href="https://twitter.com/SpaceX" target="_blank">
            <FontAwesomeIcon size="2x" icon={faTwitter} Link />
            {data.links.twitter}
          </a>
        </div>
        <div className="social-icons">
          <a href="https://flickr.com/photos/SpaceX" target="_blank">
            <FontAwesomeIcon size="2x" icon={faFlickr} Link />
            {data.links.flickr}
          </a>
        </div>

        <div className="social-icons">
          <a href="https://spacex.com" target="_blank">
            <FontAwesomeIcon size="2x" icon={faChrome} Link />
            {data.links.website}
          </a>
        </div>
      </div>
    <div className="section-bottom-img">
      <Image  alt="spaceX-rocket" src={purpleBackground}
      placeholder="blur"
     
      />
    </div>
    
    </div>
  );
}
export default CompanyInfo;
