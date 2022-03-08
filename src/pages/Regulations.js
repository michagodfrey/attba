import React from "react";
import States from "../components/States";
import StateModal from "../components/StateModal";
import states from "../data/states";
import { useGlobalContext } from "../context";
import StatesList from "../components/StatesList";
import questions from "../data/questions";
import Question from "../components/Question";

const Regulations = () => {

  const { modal } = useGlobalContext();
  let getState = [];

  states.map((state) => {
    if (state.id === modal) {
      return getState = { ...state };
    }
  });
  
  return (
    <main>
      <StateModal {...getState} />
      <div className="container grid-columns">
        <div className="states-container">
          <h3>click on a state to view more</h3>
          <States />
        </div>
        <StatesList />
        <div>
          <h2>Intrastate biosecurity in Australia</h2>
          <p>
            Here biosecurity refers to protection of plants and animals from
            pests and diseases. While this generally does not involve human
            health, preventing the spread of plant and animal pests/diseaese has
            economic, environmental and social benefits.
          </p>
          <p>
            As an Island, Australia has a natural advantage to keep unwanted
            organisms out of the country. However, Australia is a large country
            with ecosystems isolated from each other by desert or water. So just
            as there are quaratine rules and checks at the Australian border,
            each Australian state has its own biosecurity laws.
          </p>
          <p>
            Contact the biosecurity authority in the destination state to check
            the entry conditions of your commodity.
          </p>
          <p>
            Some states have monitored borders. That is, there are checkpoints
            at the border to inspect and/or check the certification of organic
            products entering the state.
          </p>
        </div>
      </div>
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

export default Regulations;
