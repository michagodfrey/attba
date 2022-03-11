import React from "react";
import { useGlobalContext } from "../context";
import { ExternalLink } from "react-external-link";

const StateModal = ({ name, border, department, url }) => {
  const { isStateModalOpen, closeStateModal } = useGlobalContext();

  return (
    <div
      className={`${
        isStateModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h1>{name}</h1>
        <p>Border: {border}</p>
        <ExternalLink href={url} className="external-link">
          Biosecurity authority: {department}
        </ExternalLink>
        <br></br>
        <button className="btn--secondary" onClick={closeStateModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default StateModal;
