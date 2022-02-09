import React from 'react';
import { useGlobalContext } from "../context";
import states from "../data/states";


const StateModal = () => {
  const { isStateModalOpen, closeStateModal, modal } = useGlobalContext();
  const [name, setName] = React.useState([]);


  const getStateData = () => {
    states.map((state) => {
      if (state.id === modal) {
        setName(state.name);
      }
      console.log(name);
    })
  }
  
  return (
    <div
      className={`${
        isStateModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h1>1</h1>
        <p>2</p>
        <p>3</p>
        <button onClick={closeStateModal}>close</button>
        <button onClick={getStateData}>console log</button>
      </div>
    </div>
  );
};

export default StateModal;
