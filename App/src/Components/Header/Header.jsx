import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faCar, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"

function Header() {
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
           <button className="headerButton">Sign In / Register</button>
        </div>
    </div>
  )
}

export default Header
