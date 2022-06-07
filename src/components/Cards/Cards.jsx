import React, { useEffect, useState } from "react";
import "./Cards.css";
import { cardsData, getData } from "../../Data/Data";
import axios from "axios";

import Card from "../Card/Card";

const Cards = () => {
      const appUrl = 'https://jsonplaceholder.typicode.com/users'
      const [data, setData] = useState(null)

      useEffect(() => {
        axios.get(appUrl)
          .then(response => {
              setData(response.data)
          })
      }, [appUrl])

  // const [dataTitle, setDataTitle] = useState(['Vibration', "Moisture", "Rainfall"])
  // useEffect(() => {
  //   getData()
  // }, [])

  // const getData = async () => {
  //   const appUrl = 'https://jsonplaceholder.typicode.com/users'
  //   const [product,setProduct] = useState(null)
  //   const response = await fetch(appUrl)
  //   const api_data = await response.json()
  //   // console.log("api data: ",api_data)

    

  //   // setData(api_data)

  // }
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        console.log(data)
        

        

        return (
          <div className="parentContainer" key={id}>
            
            <Card
              title={card.title}
              color={card.color}
           //   barValue={data[id]}
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
