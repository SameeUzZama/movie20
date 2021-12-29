import React from "react";
import { useDispatch } from "react-redux";
import "./Redux.css";

const MoviesChils = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="cards">
      <img
        className="image"
        width="250px"
        height="300px"
        src={item.image}
        alt=""
      />
      <h4>{item.Title.substr(0, 20) + "..."}</h4>
      <h5>IMDB: {item.rating}</h5>
      <h5>Year:{item.ReleaseYear}</h5>
      <button
        className="add-cart"
        onClick={() => dispatch({ type: "Add-Cart", data: item })}
      >
        Favt. Movies
      </button>
    </div>
  );
};

export default MoviesChils;
