import useSWR from "swr";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFlickr } from "@fortawesome/free-brands-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div className="cols">
        <h2>Name: {data.name}</h2>
        <h2>Ceo: {data.ceo}</h2>
        </div>
      </div>
      <div className="row">
      <div className="cols">
        <h3>Employees: {data.employees}</h3>
        <h3>Founded: {data.founded}</h3>
        </div>
      </div>
      <div className="row">
      <div className="cols">
        <p>{data.summary}</p>
        </div>
      </div>
      <div className="row">
        <div className="cols">
          <a href="https://twitter.com/elonmusk">
            <FontAwesomeIcon size="2x" icon={faTwitter} Link />
            {data.links.elon_twitter}
          </a>
        </div>
        <div className="cols">
          <a href="https://twitter.com/SpaceX">
            <FontAwesomeIcon size="2x" icon={faTwitter} Link />
            {data.links.twitter}
          </a>
        </div>
        <div className="cols">
          <a href="https://twitter.com/SpaceX">
            <FontAwesomeIcon size="2x" icon={faFlickr} Link />
            {data.links.flickr}
          </a>
        </div>

        <div className="cols">
          <a href="https://twitter.com/SpaceX">
            <FontAwesomeIcon size="2x" icon={faChrome} Link />
            {data.links.website}
          </a>
        </div>
      </div>
    </div>
  );
}
export default CompanyInfo;
