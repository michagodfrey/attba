import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


const StateAccordion = ({ step, text }) => {
    const [show, setShow] = useState(false);

  return (
    <div className="panel">
      <div className="panel__title">
        <h3>{step}</h3>
        <button className="btn--panel" onClick={() => setShow(!show)}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <p>{show ? text : ""}</p>
    </div>
  );
};

export default StateAccordion;
