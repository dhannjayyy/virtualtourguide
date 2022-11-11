import React, { useEffect } from "react";
import { mappls } from 'mappls-web-maps'


function MapC() {

  const styleMap = { width: '99%', height: '99vh', display: 'inline-block' }
  const mapProps = { center: [28.567396, 77.251571], traffic: false, zoom: 18, geolocation: true, clickableIcons: true }
  var mapObject;
  var mapplsClassObject = new mappls();
  mapplsClassObject.initialize("9756e4ab723995b33a4621b276f7bdc4", () => {
    mapObject = mapplsClassObject.Map({ id: "map", properties: mapProps });
    
    mapObject.on("load", () => {
    })
  });
  return (
    <div>
      <div id="map" style={styleMap}></div>
    </div>
  );
}

export default MapC;
