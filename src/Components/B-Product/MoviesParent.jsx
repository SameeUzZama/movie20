import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesChils from "./MoviesChils";
import "./Redux.css";

const MoviesParent = ({ search }) => {
  const stateMovie = useSelector((state) => state.MoviesReducer.movie);
  const [movie, setMovie] = useState([]);
  const dispatch = useDispatch();
  const getApiMovie = async () => {
    const allMovie = await axios.get("movies.json");
    setMovie(allMovie.data.Search);
    console.log(allMovie.data.Search);
    dispatch({ type: "Add-Movies", data: allMovie.data.Search });
  };
  useEffect(() => {
    getApiMovie();
  }, []);
  useEffect(() => {
    const filtered = stateMovie.filter((item) =>
      item.Title.toLowerCase().includes(search.toLowerCase())
    );
    setMovie(filtered);
  }, [search]);
  return (
    <div className="caros">
      <h1>this is movies parent</h1>
      <div className="cards-parent">
        {movie.map((item) => {
          return <MoviesChils item={item} />;
        })}
      </div>
    </div>
  );
};

export default MoviesParent;
