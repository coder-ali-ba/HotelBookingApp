import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import "./list.css"
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../Components/SearchItem/SearchItem'

function List() {
  const location = useLocation()
  const [destination , setDestination] = useState(location.state.destination)
  const [date , setDate] = useState(location.state.date)
  const [options , setOptions] = useState(location.state.options)
  const [openDate , setOpenDate] = useState(false)
  // const {destination , date , options} = location.state
  console.log(location.state.date[0].startDate);
 
  
  return (
    <div className="">
      <Navbar /> <Header type="list"/>

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>

            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            <div className="lsItem">
              <label htmlFor="">Check-in date</label>
              <span onClick={()=>setOpenDate(!openDate)}>
                  {`${format(date[0].startDate , "MM/dd/yyyy")} to ${format(date[0].endDate , "MM/dd/yyyy")}`}
              </span>
              {openDate && <DateRange
                onChange={(item)=>setDate(item.selection)}
                minDate={new Date()}
                ranges={date}
               />}          
            </div>
           
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  MinPrice <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  MaxPrice <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Adult 
                </span>
                <input type="number" min={1} className="lsOptionInput"  placeholder={options.adult}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Children 
                </span>
                <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Room 
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.room}/>
              </div>
            </div>
            </div>
          <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
