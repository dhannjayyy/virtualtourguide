import LocationCard from "./locationCard/LocatioonCard";
import Link from "next/link";

const Locations = () => {
  return (
    <div className="lt-location-section">
      <div className="lt-location-container">
        <h1 className="lt-location-heading">CITIES TO EXPLORE</h1>
        <div className="lt-locations">
          <LocationCard cityName={"Delhi"} page={"#"} />

          <LocationCard cityName={"Lucknow"} page={"#"} />

          <LocationCard cityName={"Hyderabad"} page={"#"} />
        </div>
      </div>
    </div>
  );
};

export default Locations;
