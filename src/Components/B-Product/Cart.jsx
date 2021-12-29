import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Redux.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.MoviesReducer.cart);
  return (
    <div>
      <h1>this is cart</h1>
      <div className="cards-parent">
        {cartItems.map((item) => {
          return (
            <div className="cards">
              <img
                className="image"
                height="250px"
                width="250px"
                src={item.image}
                alt=""
              />
              <h4>{item.Title.substr(0, 20) + "..."}</h4>
              <h5>IMDB: {item.rating}</h5>
              <h5>Year:{item.ReleaseYear}</h5>
              <button
                className="remove-cart"
                onClick={() => dispatch({ type: "Remove-Movies", data: item })}
              >
                Remove{" "}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
