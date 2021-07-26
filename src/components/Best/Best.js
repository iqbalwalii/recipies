import React from "react";
import Card from "../Card/Card";
import "./Best.css";

const Best = () => {
  return (
    <div>
      <h1 className="text-center mt-5">Top Picks</h1>
      <p className="text-center">High Rated recipies directly from Oven</p>
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Best;
