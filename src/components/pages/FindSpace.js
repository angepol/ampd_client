import React from 'react';
import "./FindSpace";
import "./FindSpaceStyle.js";


class FindSpace extends React.Component {
  render () {
    return (
      <div container>
        <div class="mapSection" id="map-section">
          <div class="searchbar"> ::before
          <div class="d-flex justify-content-between align-items-center">
            <div style="flex: 1 1 0%; padding-right:15px;">
              <div class="mainsearch small">
                 <div class="searchbar">
                   <svg id="searchLoop-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ABABAB" class="" width="24" height="24" style="width: 32px; height: 32px;">
                      <path d="M21.4,20.6L16.9,16c1.3-1.5,2.1-3.4,2.1-5.5C19,5.8,15.2,2,10.5,2S2,5.8,2,10.5S5.8,19,10.5,19	c2.2,0,4.2-0.8,5.7-2.2l4.4,4.6c0.2,0.2,0.5,0.2,0.7,0C21.5,21.2,21.5,20.8,21.4,20.6z M10.5,18C6.4,18,3,14.6,3,10.5	C3,6.4,6.4,3,10.5,3c4.1,0,7.5,3.4,7.5,7.5C18,14.6,14.6,18,10.5,18z">
                      </path>
                    </svg>
                    <input label="Where do you want to park?" placeholder="Where do you want to park?" id="place-search-input" type="text" class="google-place-search-input form-control pac-target-input" value="" autocomplete="off">

                 </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div class="mapWrapper">
         <div class="mapContainer">
           <div id="map" style="height: 100%; position: relative; overflow: hidden;">
            <div style="height:100%; width: 100%; position: absolute; top: 0px; left: 0px;">
             <

         </div>
        </div>


        <div class="side-bar">
          <div class="sidebar-wrapper p-3">

          </div>
        </div>
      </div>

    )
  }
}
