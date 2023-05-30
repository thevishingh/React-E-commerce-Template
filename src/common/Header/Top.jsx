import React from "react";
import "./Top.css";
function Head() {
  return (
    <div>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label> +91 9175-506-236</label>
            <i className="fa fa-envelope"></i>
            <label> thevishingh@gmail.com</label>
          </div>
          <div className="right row RText">
            <label>Theme FAQ"s</label>
            <label>Need Help</label>
            <span></span>
            <label>EN</label>
            <span></span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Head;
