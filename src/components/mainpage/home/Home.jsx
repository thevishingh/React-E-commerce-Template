import React from "react";
import "./Home.css";
import Categories from "../categories/Categories"
import SliderHomes from "../slider/Slider";
function Home() {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
         <Categories/>
         <SliderHomes/>
        </div>
      </section>
    </>
  );
}

export default Home;
