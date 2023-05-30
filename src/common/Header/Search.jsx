import React from "react";
import "./Search.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
function Search({cartItem}) {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", this.window.scrollY > 100);
  });
  return (
    <div>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt="logo" />
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search" />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{cartItem.length === 0 ? "0" : cartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
