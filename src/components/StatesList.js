import React from 'react';
import { useGlobalContext } from "../context";

const StatesList = () => {
    const { openStateModal } = useGlobalContext();

  return (
    <div className="states-list-container">
      <h4>click on a state to view more</h4>
      <ul className="states-list">
        <li className="btn--state" onClick={() => openStateModal("NSW")}>
          New South Wales &amp; ACT
        </li>
        <li className="btn--state" onClick={() => openStateModal("NT")}>
          Northern Territory
        </li>
        <li className="btn--state" onClick={() => openStateModal("QLD")}>
          Queensland
        </li>
        <li className="btn--state" onClick={() => openStateModal("SA")}>
          South Australia
        </li>
        <li className="btn--state" onClick={() => openStateModal("TAS")}>
          Tasmania
        </li>
        <li className="btn--state" onClick={() => openStateModal("VIC")}>
          Victoria
        </li>
        <li className="btn--state" onClick={() => openStateModal("WA")}>
          Western Australia
        </li>
      </ul>
    </div>
  );
}

export default StatesList