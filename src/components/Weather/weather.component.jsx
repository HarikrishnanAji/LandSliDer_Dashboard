import React from "react";
import "./weather.style.css";

const Weather = props => {
  return (
    <div className="container text-light bg-blue">
      <div className="Card">
        <h1 className="text-white py-4 text-2xl ">{props.cityname}</h1>
        <h5 className="py-4 text-2xl">
          <i className={`wi ${props.weatherIcon} display-1 `} />
        </h5>

        {/* Get Celsius */}
        {props.temp_celsius ? (
          <h1 className="py-3 text-2xl">{props.temp_celsius}&deg;</h1>
        ) : null}

        {/* show max and min temp */}
        {maxminTemp(props.temp_min, props.temp_max)}

        {/* Weather description */}
        <h4 className="py-2 text-2xl">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="px-2">{min}&deg;</span>
        <span className="px-2">{max}&deg;</span>
      </h3>
    );
  }
}
