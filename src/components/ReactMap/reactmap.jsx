import React from 'react'
import { useState } from 'react'
import ReactMapGL from "react-map-gl"
import Tabs from './tabs.jsx';


const reactMap = () => {
    // const [viewport, setViewport] = useState({
    //     latitude: 0.1137603,
    //     longitude: 51.5098109,
    //     zoom: 10,
    //     width: "100vw",
    //     height: "100vh"

    
  return (
    <div className="App">
        <Tabs />
    </div>
  );
}

export default reactMap;