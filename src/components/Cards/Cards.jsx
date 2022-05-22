import React, { useEffect, useState } from "react";
import "./Cards.css";
import { cardsData, getData } from "../../Data/Data";

import Card from "../Card/Card";

const Cards = () => {

  const [data, setData] = useState()
  const [dataTitle, setDataTitle] = useState(['Vibration', "Moisture", "Rainfall"])
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const api_data = await (await fetch('http://127.0.0.1:5000/dataset')).json()
    console.log("api data: "+api_data)

    setData(api_data)
    
  }
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        console.log(data)
        

        return (
          <div className="parentContainer" key={id}>
            
            <Card
              title={card.title}
              color={card.color}
              // barValue={data[id]}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
