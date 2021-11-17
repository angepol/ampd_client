import React, { Component } from 'react';
import Map from '../Map.js'
import "./FindSpaceStyle.js";
import Header from '../Header.js'
import Footer from '../Footer.js'

class FindSpace extends React.Component {
  render () {
    return (
      <div>
      <Header />
      <div className="mapSection">
       <Map/>      
          <div className="text">
           <h2> Hello Sydney!</h2>
          </div>
        <div className="row">
           <div className="col-1">
             <p>
             Ampd has cheap and secure spaces available in Sydney. Rent undercover parking, outdoor parking, garages, driveways, overnight and secure parking spaces in just two clicks. KERB lets you reduce your parking costs - and the time you spend looking for parking!

             </p>
           </div>
           <div className="col-2">
             <p>
             All around Sydney, there is parking space that is not being used 24/7. Residential parking spaces sit empty during the day. Car parks often have empty spaces at night, or at weekends. Jetties and boat moorings are not always occupied. And outside of the cities, empty land could be generating income from parking for trucks, buses, shipping containers and even helicopters. KERB lets you list your parking spaces for FREE. It will manage bookings, availability and even payments. And you'll get paid 2 days after every booking. Tell your friends and family about Ampd… It's a brilliant way to park in your city.
            </p>

          </div>
        </div>
        </div>




       <Footer />





       </div>


    )
  }
}

export default FindSpace;
