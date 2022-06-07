import { useState, useEffect } from "react"

export const Chart = () => {
    useEffect(() => {
        const fetchPrices = async () => {
          const res = await fetch("http://127.0.0.1:5000/dataset")
          const data = await res.json()
          console.log(data)
        }
      fetchPrices()
      }, [])
    
  return (
    <div onClick={Chart}>Chart</div>
  )
}
