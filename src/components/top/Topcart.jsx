import React from "react";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TopData from "./TopData";

function Topcart() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {TopData.map((data, index) => {
          return (
            <>
              <div className="box product" key={index}>
                <div className="nametop d_flex">
                  <span className="tleft">{data.para}</span>
                  <span className="tright">{data.desc}</span>
                  <div className="img">
                    <img src={data.cover} alt="" />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
}

export default Topcart;
