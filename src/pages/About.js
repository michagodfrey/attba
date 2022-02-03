import React from "react";
import questions from "../data/questions";
import Question from "../components/Question";

const About = () => {
  
  return (
    <main>
      <div className="container">
        <h2>Australian Travel &amp; Trade Biosecurity Assistant</h2>
        <div>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default About;
