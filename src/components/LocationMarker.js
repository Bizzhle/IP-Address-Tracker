import React, { useState, useEffect }  from 'react';
import Leaflet from 'leaflet';
// import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

function LocationMarker({geolocation}) {

  const {latitude, longitude} = geolocation;
  const ACCESS_KEY = 'pk.eyJ1IjoiYml6emhsZSIsImEiOiJja2tvMnZlbzczbzdkMzBvY2o3b3E0cDNhIn0.i0byuwNb8eVs8g4OUbZE5w';
  const ATTRIBUTION = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
  const ID = 'mapbox/streets-v11';
  const [mymap, setMyMap] = useState(null);

  useEffect(() => {
    setMyMap(Leaflet.map('mapid'));
    
}, []);

useEffect(() => {
    const MILLISECONDS = 500;
    const TIMEOUT_ID = setTimeout(() => {
        if (mymap === null) {
            return;
        }
        mymap.setView([latitude, longitude], 13);
        Leaflet.tileLayer(
            `https://api.mapbox.com/styles/v1/${ID}/tiles/{z}/{x}/{y}?access_token=${ACCESS_KEY}`,
            {
                attribution: ATTRIBUTION,
                maxZoom: 18,
                id: ID,
                tileSize: 512,
                zoomOffset: -1,
                accessToken: ACCESS_KEY
            }
        ).addTo(mymap);
        Leaflet.marker([latitude, longitude]).addTo(mymap);
    }, MILLISECONDS);

    return () => {
        clearTimeout(TIMEOUT_ID)
    };

}, [latitude, longitude, mymap]);
  
    return (
      <div id="mapid"></div>
     
    );
   
}

export default LocationMarker
