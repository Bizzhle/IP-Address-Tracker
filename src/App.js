import React, { useState} from 'react';
import LocationMarker from "./components/LocationMarker.js"
import Header from "./components/Header.js"
import Display from './components/Display.js';
// import L from 'leaflet';


function App() {

  const [geolocation, setGeolocation] = useState({
    ip_address: '',
    location: '',
    time_zone: '',
    isp: '',
    latitude: 51.505,
    longitude: -0.09,
  });
    
    return(
      <React.Fragment>
        <Header setGeolocation={setGeolocation}/>
        <Display geolocation={geolocation} />
        <LocationMarker geolocation={geolocation} />
        
      </React.Fragment>
    );
}

export default App;
