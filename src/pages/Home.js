import React from "react";
import "./Home.css";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Home() {
  return (
    <div className="content-container">
      <div className="home">
        <Header />
        <Banner />

        <div className="home_section">
          <Card
            src={"./images/parked-icon.png"}
            title="List a parking space"
            description="With AMPD, you can rent your bay (driveway, garage, mooring, land, etc.) at home or work to others while you aren’t using it."
          />
          <Card
            src="./images/charger.png"
            title="Tailored solutions for any car park"
            description="AMPD is designed to automate and bring digital functionality to ANY car park. Learn more about AMPD's solutions for car park operators, airports, shopping malls, hotels and more here."
          />
          <Card
            src="./images/invest-icon.png"
            title="Invest in AMPD"
            description="Few investment opportunities address such a sizeable market as AMPD does. AMPD is a disruptive global mobility ecosystem that is activating the kerbside through technology and IoT - right across the world."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
