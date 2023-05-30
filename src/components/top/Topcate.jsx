import React from 'react'
import Topcart from './Topcart';
import "./style.css";

function Top() {
  return (
    <>
     <section className="topcat background">
      <div className="container">
        <div className="heading d_flex">
          <div className="heading-left row f_flex">
            <h2>Top Categories</h2>
          </div>
          <div className="heading-right row">
            {/* <span>View All</span>
            <i className="fa fa-caret-right"></i> */}
          </div>
        </div>
        <Topcart/>
      </div>
     </section>
    </>
  )
}

export default Top
