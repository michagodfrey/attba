import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// to import the data on the regulatutions page
// ensuring the questions and and Question has been imported

{/* <div>
  {questions.map((question) => {
    return <Question key={question.id} {...question} />;
  })}
</div>; */}



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
