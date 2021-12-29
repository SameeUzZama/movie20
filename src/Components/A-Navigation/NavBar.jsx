import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../B-Product/Redux.css";

export const NavBar = ({ setSearch }) => {
  const cartItems = useSelector((state) => state.MoviesReducer.cart);
  return (
    <div className="NavBar">
      <Link className="logo" to="/">
        Movies
      </Link>
      <input
        className="search"
        onChange={(e) => setSearch(e.target.value)}
        type="Search"
        placeholder="Search here...."
      />
      <button className="srch-btn">Search</button>
      <Link className="cart-anchor" to="/cart">
        Cart:{cartItems.length}{" "}
      </Link>
    </div>
  );
};
