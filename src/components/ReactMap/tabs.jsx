import React, { useState } from "react";
import TabNavItem from "./tabNavItem.jsx";
import TabContent from "./tabContent.jsx"; 

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("mapbox");
 
  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem title="London" id="London" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Leaflet" id="leaflet" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="OpenLayers" id="openlayers" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="London" activeTab={activeTab}>
         <p>fd</p>
        </TabContent>
        <TabContent id="leaflet" activeTab={activeTab}>
          <p>Leaflet works!</p>
        </TabContent>
        <TabContent id="openlayers" activeTab={activeTab}>
          <p>OpenLayers works!</p>
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;