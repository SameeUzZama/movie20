import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../A-Navigation/NavBar";
import Cart from "../B-Product/Cart";
import MoviesParent from "../B-Product/MoviesParent";

export const Landing = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <BrowserRouter>
        <NavBar setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<MoviesParent search={search} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Landing;
