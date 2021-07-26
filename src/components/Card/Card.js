import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Card = () => {
  return (
    <div>
      <div className="kard">
        <div className="cardTop">
          <div className="cardLeft">
            <p>
              <img
                src="https://img.icons8.com/emoji/48/000000/fire.png"
                width="30px"
              />
              <strong>228</strong> Kcal
            </p>
            <p>
              <img
                src="https://img.icons8.com/color/48/000000/clock--v3.png"
                width="30px"
              />
              <strong>10 </strong>min
            </p>
            <p>
              <img
                src="https://img.icons8.com/color/48/000000/person-male.png"
                width="30px"
              />
              <strong>2 </strong>People
            </p>
          </div>
          <div className="cardRight">
            <img
              src="./assets/images/dis.png"
              alt="Kard image"
              className="CardImg"
            />
          </div>
        </div>
        <div className="cardBottom mt-4">
          <h5 className="text-center">
            <strong>Salmon</strong> Nigger
          </h5>
          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ad
            ullam itaque commodi cupiditate quae. Dicta vel in hic dolorem!
          </p>
          <span className="stars">
            <img
              src="https://img.icons8.com/fluent/48/000000/star.png"
              width="25px"
            />
            <img
              src="https://img.icons8.com/fluent/48/000000/star.png"
              width="25px"
            />
            <img
              src="https://img.icons8.com/fluent/48/000000/star.png"
              width="25px"
            />
            <img
              src="https://img.icons8.com/fluent/48/000000/star.png"
              width="25px"
            />
            <img
              src="https://img.icons8.com/fluent/48/000000/star.png"
              width="25px"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
