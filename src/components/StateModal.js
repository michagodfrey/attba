import React from "react";
import { useGlobalContext } from "../context";
import { ExternalLink } from "react-external-link";

const StateModal = (getState) => {
  
  const { isStateModalOpen, closeStateModal } = useGlobalContext();
  
  return (
    <div
      className={`${
        isStateModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h1>{getState.name}</h1>
        <p>Border: {getState.border}</p>
        <hr></hr>
        <p>
          <ExternalLink href={getState.url} className="external-link">
            Biosecurity authority: {getState.department}
          </ExternalLink>
        </p>
        <p>
          <ExternalLink href={getState.pqm} className="external-link">
            Quarantine Manual
          </ExternalLink>
        </p>
        <br></br>
        <button className="btn--secondary" onClick={closeStateModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default StateModal;
