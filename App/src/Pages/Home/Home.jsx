import Featured from "../../Components/Featured/featured"
import Header from "../../Components/Header/Header"
import Navbar from "../../Components/Navbar/Navbar"
import "./home.css"

function Home() {
  return (
    <div>
      <Navbar/>
      <Header />

      <div className="homeContainer">
        <Featured />
      </div>
    </div>
  )
}

export default Home
