import React from "react";
import Cards from "../Cards/Cards";
import PredictionResults from "../PredictionResults/PredictionResults";

import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <h3 className="m-d: 45px;">Prediction Results</h3>
      <div className="pResults"><PredictionResults /></div>
        
    </div>
  );
};

export default MainDash;
