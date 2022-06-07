import React, { useState } from "react";
import Table from "../Table/Table";
import "./RightSide.css";
import Weathers from '../Weather/Weathers'


const RightSide = () => {
  const [color, setColor] = useState()
  return (
    <div className="RightSide">

      {/* <button className="start" onClick={() => setColor('red')}> s</button> */}
      <div className="Table"> <Table color={color}/></div> 

      <div className="Weathers"><Weathers/></div>
      </div>
  
    
  );
};

export default RightSide;



