import React, { useState } from "react";
import "./FlashCard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { onClick } = props;

  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

const PreArrow = (props) => {
  const { onClick } = props;

  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

function FlashCard({ productItems, addToCart }) {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(0)

  const increment = () => {
    setCount(count + 1);
  };

  // const decrement = () => {
  //   setCount(count - 1);
  // };

  const productLike = ()=>{
    setLike(like + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {productItems.map((data, index) => {
          return (
            <div className="box" key={index}>
              <div className="product mtop">
                <div className="img">
                  <span className="discount"> {data.discount} % Off</span>
                  <img src={data.cover} alt="" />
                  <div className="product-like">
                    <label>{like}</label> <br />
                    <i className="fa-regular fa-heart" onClick={productLike} ></i>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{data.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>{data.price}.00</h4>
                    <button onClick={()=> addToCart(data)}>
                      <i className="fa fa-plus" onClick={increment}></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default FlashCard;
