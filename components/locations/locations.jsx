import LocationCard from "./locationCard/LocatioonCard";
import Link from "next/link";

const Locations = () => {
  return (
    <div className="lt-location-section">
      <div className="lt-location-container">
      
        <LocationCard cityName={"Delhi"} page={"#"} />
      
        <LocationCard cityName={"Lucknow"} page={"#"}/>
      
        <LocationCard cityName={"Hyderabad"} page={"#"}/>
      </div>
    </div>
  );
};

export default Locations;
