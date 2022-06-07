import React, { useState } from "react";
import Cards from "../Cards/Cards";
import PredictionResults from "../PredictionResults/PredictionResults";
// import Cha

import "./MainDash.css";
const MainDash = () => {
  
  return (
    <div className="MainDash">
      
      <h2 className='heading'>Dashboard</h2>
      <Cards />
      <h3 className="predict">Prediction Results</h3>
      <div className="pResults"><PredictionResults /></div>
        
    </div>
  );
};

export default MainDash;
 