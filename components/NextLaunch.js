import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch(
    "https://api.spacexdata.com/v5/launches/upcoming"
  );
  const data = await response.json();
  // console.log(data);
  return data;
};

function NextLaunch() {
  const { data, error } = useSWR("upcoming", fetcher);

  if (error) return "An error has occured";

  if (!data) return "Loading";

  return (
    <div className="content">
        <div className="section__title">
        <h2>Upcoming Launches</h2>
        </div>
      {data.map((launch) =>
        launch.details ? (
          <div key={launch.id} className="row">
             <div className="card__content"> 
             <div className="title"> 
             <h3>Name: {launch.name}</h3>
             </div>
             <div className="text">
             <p>{launch.details}</p>
             </div>
          
             </div>
          </div>
        ) : (
            <div key={launch.id} className="row">
                <div className="card__content">
                <div className="title"> 
                <h3>Name: {launch.name}</h3>
                </div>
                <div className="text">
              <p>No details available for this launch</p>
              </div>
                    </div>
            </div>
          )
      )}
    </div>
  );
}
export default NextLaunch;
