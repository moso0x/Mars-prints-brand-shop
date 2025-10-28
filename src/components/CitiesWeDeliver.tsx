import React from "react";
import "./CitiesWeDeliver.css"; // import the CSS for animations

const cities = ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"];

export const CitiesWeDeliver: React.FC = () => {
  return (
    <div className="cities-delivery-section">
      <h2 className="delivery-title">We Deliver To</h2>
      <div className="dropping-texts">
        {cities.map((city, index) => (
          <div key={index}>{city}</div>
        ))}
      </div>
    </div>
  );
};

export default CitiesWeDeliver;
