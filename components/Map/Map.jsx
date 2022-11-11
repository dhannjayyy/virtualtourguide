import React, {useEffect} from "react";
import Map from "mapmyindia-react/dist/Map";

function MapC() {
//   useEffect(() => {
    return <Map
      markers={[
        {
          position: [18.5314, 73.845],
          draggable: true,
          title: "Marker title",
          onClick: (e) => {
            console.log("clicked ");
          },
          onDragend: (e) => {
            console.log("dragged");
          },
        },
      ]}
    />;
//   }, []);
}

export default MapC;
