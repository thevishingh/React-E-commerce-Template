import React from "react"
import "./Slider.css";
import SlideCard from "../slidecard/SlideCard";

const SliderHome = () => {
  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='container'>
          <SlideCard />
        </div>
      </section>
    </>
  )
}

export default SliderHome
