import React, { Component } from 'react';
import Map from '../Map.js'
import "./FindSpace.css";
import Header from '../Header.js'
import Footer from '../Footer.js'
import Banner from '../Banner.js'

class FindSpace extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <Map/>
      <div className="mapSection">

          <div className="text">
           <h2> Hello Sydney!</h2>
          </div>
        <div className="sydney">
           <div className="card">
             <p>
             Ampd has cheap and secure spaces available in Sydney. Rent undercover parking, outdoor parking, garages, driveways, overnight and secure parking spaces in just two clicks. Ampd lets you reduce your parking costs - and the time you spend looking for parking!

             </p>
           </div>
           <div className="card">
             <p>
             All around Sydney, there is parking space that is not being used 24/7. Residential parking spaces sit empty during the day. Car parks often have empty spaces at night, or at weekends. Jetties and boat moorings are not always occupied. And outside of the cities, empty land could be generating income from parking for trucks, buses, shipping containers and even helicopters. Ampd lets you list your parking spaces for FREE. It will manage bookings, availability and even payments. And you'll get paid 2 days after every booking. Tell your friends and family about Ampd… It's a brilliant way to park in your city.
            </p>

          </div>
        </div>
        </div>
       <Banner />
       <Footer />
       </div>
    )
  }
}

export default FindSpace;
