import React from "react";
import questions from "../data/questions";
import Question from "../components/Question";

const About = () => {
  
  return (
    <main>

      <div className="container container--about">
        <h2>How to find quarantine controls for plants and plant products.</h2>
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
