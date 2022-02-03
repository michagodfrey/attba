import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ question, answer }) => {
    const [show, setShow] = useState(false);

  return (
    <div className="question">
      <div className="question__title">
        <h3>{question}</h3>
        <button className="btn--question" onClick={() => setShow(!show)}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <p>{show ? answer : ""}</p>
    </div>
  );
};

export default Question;
