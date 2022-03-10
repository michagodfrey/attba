import React from "react";
import { useGlobalContext } from "../context";

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
        <p className="external-link">
          <a href={url} target="_blank">
            Biosecurity authority: {department}
          </a>
        </p>
        <button className="btn--secondary" onClick={closeStateModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default StateModal;
