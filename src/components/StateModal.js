import React from 'react';
import { useGlobalContext } from "../context";

const StateModal = () => {
  const { isStateModalOpen, closeStateModal } = useGlobalContext();

  return (
    <div
      className={`${
        isStateModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h1>title</h1>
        <button onClick={closeStateModal}>button</button>
      </div>
    </div>
  );
};

export default StateModal;
