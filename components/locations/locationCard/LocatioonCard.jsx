import Link from "next/link";

const LocationCard = ({ cityName,page }) => {
  return (
    <>
      <div className="lt-location-card">
        <Link href={page}>
          <h3>{cityName}</h3>
        </Link>
      </div>
    </>
  );
};

export default LocationCard;
