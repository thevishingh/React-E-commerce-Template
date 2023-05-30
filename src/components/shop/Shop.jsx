import React from "react";
import Cate from "./Cate";
import ShopCart from "./ShopCart";
import "./styele.css";

function Shop({shopItems, addToCart}) {
  return (
    <>
      <>
        <section className="shop background">
          <div className="container  d_flex">
            <Cate />
            <div className="contentWidth">
              <div className="heading d_flex">
                <div className="heading-left row f_flex">
                  <h2>Mobile Phones</h2>
                </div>
              </div>
              <div className="product-content grid2">
                <ShopCart shopItems={shopItems} addToCart={addToCart}/>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}

export default Shop;
