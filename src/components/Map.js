import React, { PureComponent, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Geocoder from 'react-mapbox-gl-geocoder';
import { Container, Col, Row, Button } from 'reactstrap';
import axios from 'axios'
import "./Map.css";
import SearchIcon from "@material-ui/icons/Search";
import Input from "../componenets/Input.style";

const SERVER_URL = "http://localhost:4001/parking_spaces.json";

const mapStyle = {
  width: "100%",
  height: 600,
};

const mapboxApiKey =
  "pk.eyJ1IjoiYW5nZXBvbCIsImEiOiJja3YzbHg4ZDcwcnM2Mm9xcG51ZG5lOGQzIn0.-ZjAUc6_dljaJQJsW7pcPw";

const params = {
  country: "AU",
};

const CustomMarker = ({ index, marker }) => {
  if (!marker) return "";
  console.log(marker, index);
  return (
    <Marker longitude={marker.longitude} latitude={marker.latitude}>
      <div className="marker">
        <span>
          <b>{index + 1}</b>
        </span>
      </div>
    </Marker>
  );
};


class Map extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      longitude: [],
      latitude: [],

      viewport: {
        latitude: -42.87703,
        longitude: 147.39367,
        zoom: 15,
      },
      tempMarker: null,
      markers: [],
    };
  }

  componentDidMount() {
    const fetchParking = () => {
      axios.get(SERVER_URL).then((response) => {
        const latPosition = [];
        const longPosition = [];
        response.data.map((pos) => {
          latPosition.push(pos.latitude);
          longPosition.push(pos.longitude);
          console.log(pos.latitude, pos.longitude);
          this.setState({ latitude: latPosition, longitude: longPosition });
        });
      });
    };
    fetchParking();
  }


saveMarker(markers) {
  if(!markers) return ""
  axios.post(SERVER_URL, {parking_space: markers}).then((response) => {

    this.setState({ markers: [...this.state.markers, response.data.parking_space]})

  })
}

  onSelected = (viewport, item) => {
    this.setState({
      viewport,
      tempMarker: {
        name: item.place_name,
        longitude: item.center[0],
        latitude: item.center[1],
      },
    });
  };

  add = () => {
    const { tempMarker } = this.state
    this.saveMarker(this.state.tempMarker)

    this.setState(prevState => ({

        tempMarker: null
    }))
  }

  render() {
    const { viewport, tempMarker, markers } = this.state;
    return (
      <Container fluid={true}>

        <Row>
          <Col>
            <ReactMapGL
              mapboxApiAccessToken={
                "pk.eyJ1IjoiYW5nZXBvbCIsImEiOiJja3YzbHg4ZDcwcnM2Mm9xcG51ZG5lOGQzIn0.-ZjAUc6_dljaJQJsW7pcPw"
              }
              mapStyle="mapbox://styles/mapbox/streets-v11"
              {...viewport}
              {...mapStyle}
              onViewportChange={(viewport) => this.setState({ viewport })}
            >

            <Row className="py-4">
              <Col xs={2}>
                <Geocoder
                    mapboxApiAccessToken={
    "pk.eyJ1IjoiYW5nZXBvbCIsImEiOiJja3YzbHg4ZDcwcnM2Mm9xcG51ZG5lOGQzIn0.-ZjAUc6_dljaJQJsW7pcPw"}
                    onSelected={this.onSelected}
                    viewport={viewport}
                    hideOnSelect={true}
                    value=""
                    queryParams={params}
                    placeholder="Where do you want to park?"
                    className="geocoder-search"
                />

              </Col>
              <Col>
               <Button color="primary" onClick={this.add}>Add</Button>
              </Col>
            </Row>
              { tempMarker &&
                <Marker
                  longitude={tempMarker.longitude}
                  latitude={tempMarker.latitude}
                >
                  <div className="marker temporary-marker">
                    <span></span>
                  </div>
                </Marker>
              }
              {this.state.markers.map((marker, index) => {
                return (
                  <CustomMarker
                    key={`marker-${index}`}
                    index={index}
                    marker={marker}
                  />
                );
              })}

              {this.state.latitude.map((latitude, index) => {
                console.log(latitude);
                return (
                  <Marker
                    latitude={latitude}
                    longitude={this.state.longitude[index]}
                  >
                    <div className="marker temporary-marker">
                      <span></span>
                    </div>
                  </Marker>
                );
              })}
            </ReactMapGL>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Map;
