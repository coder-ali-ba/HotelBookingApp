import "./searchItem.css"

function SearchItem() {
  return (
    <div className="searchItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/474866206.webp?k=d62afc97fdb7fea1e57fefa9e085138f5d3915e17da299ee24a905b916d61bd2&o=" alt="" className="siImg" />

      <div className="siDesc">
        <h1 className="siTitle">Tower street apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio Apartment with air conditioning</span>
        <span className="siFeatures">Entire Studio 21m.sq full bed</span>
        <span className="siCancelOp"> Free Cancellation</span>
        <span className="siCancelOpSubtitles">You can cancel Later , so lock in this great price today</span>
      </div>

      <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">$ 112</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
        </div>
      </div>


    </div>
  )
}

export default SearchItem
