import React from "react";
import ArrivalsData from "./ArrivalsData.js";
import "./style.css";
function Cart() {
  return (
    <>
      <div className="content grid product">
        {ArrivalsData.map((val, index) => {
          return (
            <>
              <div className="box" key={index}>
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <h4>{val.name}</h4>
                <span>{val.price}</span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
