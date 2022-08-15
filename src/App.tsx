import HelloWorld from "./HelloWorldWidget";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import React from 'react'

function App() {

  const map = new ArcGISMap({
    basemap: "streets-vector"
  });
  
  const view = new MapView({
      map: map,
      container: "viewDiv",
      center: [6, 59],
      zoom: 10
  });

 
  view.when(() => {
    const helloWidget = new HelloWorld();
    view.ui.add(helloWidget, "top-left");
  });

  return (
    <div id="viewDiv">      
    </div>
  );
}

export default App;
