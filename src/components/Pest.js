import React from "react";
import { Link } from "react-router-dom";

const Pest = ({ id, image, name, acronym, type }) => {

    return (
      <div className="pest">
        <div className="pest__img-container">
          <img src={image} alt={acronym} className="pest__img" />
        </div>
        <div className="pest__info-container">
          <h3>{name}</h3>
          <h4>Type: {type}</h4>
          <Link to={`/pest/${id}/${acronym}`} className="btn">
            more info
          </Link>
        </div>
      </div>
    );
};

export default Pest;