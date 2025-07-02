import "./featured.css"

function Featured() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/static/img/theme-index/bg_holidayhomes/8cd8cfbc91ca86a0fac09532b9f5da4eb4960c2e.jpg" alt="#"  className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>100 properties</h2>
            </div>
        </div>
         <div className="featuredItem">
            <img src="https://cf.bstatic.com/static/img/theme-index/bg_holidayhomes/8cd8cfbc91ca86a0fac09532b9f5da4eb4960c2e.jpg" alt="#"  className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>13340 properties</h2>
            </div>
        </div>
         <div className="featuredItem">
            <img src="https://cf.bstatic.com/static/img/theme-index/bg_holidayhomes/8cd8cfbc91ca86a0fac09532b9f5da4eb4960c2e.jpg" alt="#"  className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Peris</h1>
                <h2>0 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured
