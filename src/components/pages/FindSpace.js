import React, { Component } from 'react';
import Map from '../Map.js'
import "./FindSpace.css";
import Header from '../Header.js'
import Footer from '../Footer.js'
import Banner from '../Banner.js'
import axios from 'axios'

const SERVER_URL = 'http://localhost:4001/parking_spaces.json'

class FindSpace extends React.Component {
  constructor() {
    super();
    this.state = {
      FindSpace: []

    };

  }

  componentDidMount(){
    const fetchFindSpace = () => {
      axios(SERVER_URL).then((response) =>{
        const spaces = [];



        response.data.map((parking)=>{
          let thisSpace = {
           profile_image : parking.profile_image,
           description : parking.description,
           access: parking.access,
           parking_space_type: parking.parking_space_type,
           price: parking.price,
           vehicle_size: parking.vehicle_size,
           id: parking.id,
           latitude: parking.latitude,
           longitude: parking.longitude,

}
          spaces.push(thisSpace)

          this.setState({
            FindSpace: [...spaces]

           })
        })

         setTimeout(fetchFindSpace, 5000);
      });
    };

    fetchFindSpace ();
  }

  render() {
    return (
      <div>
      <Header />
<div className="mapdiv">
   <div className="mapstuff">
      <Map />
   </div>
   <div className="parkinginfo">
      <ParkingInfo FindSpace={this.state.FindSpace}/>
   </div>
</div>

      <div className="helloSydney ">

         <h1><strong> Hello Sydney!</strong> </h1>

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

const ParkingInfo = (props) => {
  console.log(props)
 return (
<div>
    { props.FindSpace.map((s) =>
      <div className="parking">
      <p> {s.description}
      <br />
        <strong>  Accessibility:</strong> {s.access}
      <br />
        <strong>Parking Space Type:</strong> {s.parking_space_type}
      <br />
        <strong>  Vehicle Size:</strong> {s.vehicle_size}
      <br />
        <strong>  Price: $ </strong> {s.price}
      </p>
</div>
   )
 }
</div>
 )
}


export default FindSpace;
