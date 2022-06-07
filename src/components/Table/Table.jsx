import React from 'react'
import './Table.css'

const Table = ({color}) => {
  return (
    <div className="main-status">
    <button className="status" >
       <h1 className="text-white bg-green-500 w-100 h-100 rounded-xl text-center align-middle hover:bg-green-400 pt-11 text-3xl	">Safe</h1>
       {/* <h1 className="text-white bg-red-500 w-100 h-100 rounded-xl text-center align-middle hover:bg-red-400 pt-12 text-3xl	">Danger</h1> */}

    </button>
  </div>)
}

export default Table