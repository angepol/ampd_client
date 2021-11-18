import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url('${
          process.env.PUBLIC_URL + "/images/lucidcitylarge.jpeg"
        }`,
      }}
    >
      <div className="banner_info">
        <h2>Find parking space and charging anywhere you go!</h2>
      </div>
    </div>
  );
}

export default Banner;
