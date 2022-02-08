import useSWR from "swr";
import ReactPlayer from "react-player";

const fetcher = async () => {
  const response = await fetch("https://api.spacexdata.com/v5/launches/latest");
  const data = await response.json();
  console.log(data);
  return data;
};

function LatestLaunch() {
  const { data, error } = useSWR("latest", fetcher);

  if (error) return "An error has occured";

  if (!data) return "Loading";
  const video = data.links.webcast;
  return (
    <div className="content">
      <div className="section__title">
        <h2>Latest launch</h2>
      </div>
      <div className="row">
        <div className="card__content">
        <div className="title"> 
        <h3>Name: {data.name}</h3>
        </div>
         
          <div className='player-wrapper'>
          <ReactPlayer url={video} 
          width="100%"
          height="auto"
          controls="true"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestLaunch;
