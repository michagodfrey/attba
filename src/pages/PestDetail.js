import React from "react";
import { ExternalLink } from "react-external-link";
import pests from "../data/pests";
import { useParams, Link } from "react-router-dom";

const PestDetail = () => {
  const { id } = useParams();

  let getPest = [];

  pests.map((pest) => {
    if (pest.id === parseInt(id)) {
      getPest = { ...pest };
    }
  });

  return (
    <main>
      <div className="content">
        <h1>
          {getPest.name} ({getPest.acronym})
        </h1>
        <div className="pest-detail">
          <div className="pest-detail__img-container">
            <img
              src={getPest.image}
              alt={getPest.acronym}
              className="pest-detail__img"
            />
          </div>
          <div className="pest-detail__info-container">
            <p>
              <span className="bold">Type:</span> {getPest.type}
            </p>
            <p>
              <span className="bold">Location:</span> {getPest.location}
            </p>
            <p>
              <span className="bold">Description: </span>
              {getPest.description}
            </p>
            <p>
              <span className="bold">Hosts:</span> {getPest.hosts}
            </p>
          </div>
          <ExternalLink href={getPest.info} className="external-link">
            official information
          </ExternalLink>
          <Link to="/pests" className="btn--secondary">
            close
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PestDetail;
