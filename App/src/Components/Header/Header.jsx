import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faCalendarDays, faCar, faL, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from "react-date-range"
import { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import {format} from "date-fns"


function Header() {

    const [openDate , setOpenDate] = useState(false)
    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

 console.log(format);
 

  return (
    <div className="header">
        <div className="headerContainer">
          <div className="headerList">
                <div className="headerListItems active">
                    <FontAwesomeIcon icon= {faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon= {faPlane} />
                    <span>FLights</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon= {faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon= {faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon= {faTaxi} />
                    <span>Airport Taxi</span>
                </div>       
           </div>
           
           <h1 className="headerTitle">A lifetime of discounts ? it's Genius</h1>
           <p className="headerDesc">Get rewarded for your travels unlock instant saving of 10% or more with a hotelbooking account</p>
           <button className="headerBtn">Sign In / Register</button>

           <div className="headerSearch">

             <div className="headerSearchItem">
                <FontAwesomeIcon icon= {faTaxi}  className="headerIcon"/>
                <input type="text" placeholder="Where are you going" className="headerSearchInput" />
             </div>

             <div className="headerSearchItem">
                <FontAwesomeIcon icon= {faCalendarDays}  className="headerIcon"/>
                <span className="headerSearchText" onClick={()=>setOpenDate(!openDate)}>
                    {`${format(date[0].startDate , "MM/dd/yyyy")} ,to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                </span>
                {openDate && <DateRange
                   editableDateInputs={true}
                   onChange={item => setDate([item.selection])}
                   moveRangeOnFirstSelection={false}
                   ranges={date}
                   className="date"
                />}
             </div>

             <div className="headerSearchItem">
                <FontAwesomeIcon icon= {faPerson}  className="headerIcon"/>
                <span className="headerSearchText">2 adults 2 child 1 room</span>
             </div>

              <div className="headerSearchItem">
                <div className="headerBtn">Search</div>
             </div>

           </div>


        </div>
    </div>
  )
}

export default Header
