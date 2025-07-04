import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import "./list.css"
import { useLocation } from 'react-router-dom'

function List() {
  const location = useLocation()

  console.log("locations " ,location);
  
  return (
    <div className="">
      <Navbar /> <Header type="list"/>

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>

            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" />
            </div>

            <div className="lsItem">
              <label htmlFor="">Check-in date</label>
              {/* <input type="text" /> */}
            </div>

          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}

export default List
