var  geoData=
{
  "type":  "FeatureCollection",
  "features": 
    [
      {
        "type":  "Feature",
        "properties":
          {
            "description":"Pgdav college canteen",
            "icon":"https://apis.mapmyindia.com/map_v3/1.png",
           
          },
        "geometry": 
          {
            "type":  "Point",
            "coordinates": [28.5665214,77.2509104]
          }
      },
      {
        "type":  "Feature",
        "properties": 
          {
            "description":"Volleyball  ground",
            "icon":"https://apis.mapmyindia.com/map_v3/1.png"
          },
        "geometry": 
          {
            "type":  "Point",
            "coordinates": [28.5665214,77.2509104]
            
          }
      },
      {
        "type":  "Feature",
        "properties": 
          {
            "description":"Pgdav gym",
            "icon":"https://apis.mapmyindia.com/map_v3/1.png"
          },
        "geometry": 
          {
            "type":  "Point",
            "coordinates": [28.5665264,77.2507012]
            
          }
      },
      {
        "type":  "Feature",
        "properties": 
          {
            "description":"Basketball ground",
            "icon":"https://apis.mapmyindia.com/map_v3/1.png"
          },
        "geometry": 
          {
            "type":  "Point",
            "coordinates": [28.5680158,77.2507035]
            
          }
      },
      {
        "type":  "Feature",
        "properties": 
          {
            "description":"Air quality index , noise pollution measurement, direction of air",
            "icon":"https://apis.mapmyindia.com/map_v3/1.png"
          },
        "geometry": 
          {
            "type":  "Point",
            "coordinates": [28.5679260,77.2505020]
            
          }
      },
      {
        "type":  "Feature",
        "properties": 
          {
            "description":"Pahal by hero motocorp",
            "icon":"https://apis.mapmyindia.com/map_v3/1.png"
          },
        "geometry": 
          {
            "type":  "Point",
            "coordinates": [28.5670688,77.2523249]
            
          }
      },
      {
        "type":  "Feature",
        "properties": 
          {
            "description":"New building",
            "icon":"https://apis.mapmyindia.com/map_v3/1.png"
          },
        "geometry": 
          {
            "type":  "Point",
            "coordinates": [28.5669661,77.2521596]
            
          }
      },
      {
        "type":  "Feature",
        "properties": 
          {
            "description":"Herbal ground",
            "icon":"https://apis.mapmyindia.com/map_v3/1.png"
          },
        "geometry": 
          {
            "type":  "Point",
            "coordinates": [28.5667267,77.2519598]
            
          }
      },
      {
        "type":  "Feature",
        "properties": 
          {
            "description":"Principal office",
            "icon":"https://apis.mapmyindia.com/map_v3/1.png"
          },
        "geometry": 
          {
            "type":  "Point",
            "coordinates": [28.5670688,77.2523249]
            
          }
      },
      {
        "type":  "Feature",
        "properties": 
          {
            "description":"Shor ground",
            "icon":"https://apis.mapmyindia.com/map_v3/1.png"
          },
        "geometry": 
          {
            "type":  "Point",
            "coordinates": [28.5664331,77.2514854]
            
          }
      },
      {
        "type":  "Feature",
        "properties": 
          {
            "description":"Choti Canteen",
            "icon":"https://apis.mapmyindia.com/map_v3/1.png"
          },
        "geometry": 
          {
            "type":  "Point",
            "coordinates": [28.5665441,77.2520081]
            
          }
      },
    ]
};

markerObject = mapplsClassObject.marker(
  {
    map:this.mapObject,
    position:geoData,
    icon:'https://apis.mapmyindia.com/map_v3/1.png',
    clusters:true,
    fitbounds:true,
    fitboundOptions:
      {
        padding:  120,
        duration:1000
      },
    popupOptions:
      {
        offset: {'bottom': [0, -20]}
      }
  }
); 