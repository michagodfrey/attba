import React from "react";
import { Link } from "react-router-dom";

const Pest = ({ id, image, name, acronym, type, location }) => {

    return (
      <div className="pest">
          <img src={image} alt={acronym} className="pest__img" />
        <div className="pest__info">
          <h3>{name}</h3>
          <h4>Type: {type}</h4>
          <p>Location: {location}</p>
          <Link to={`/pest/${id}/${acronym}`} className="btn">
            more info
          </Link>
        </div>
      </div>
    );
};

export default Pest;