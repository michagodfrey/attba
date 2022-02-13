import React from "react";
import States from "../components/States";
import StateModal from "../components/StateModal";
import states from "../data/states";
import { useGlobalContext } from "../context";
import StatesList from "../components/StatesList";

const About = () => {

  const { modal } = useGlobalContext();
  let getState = [];

  states.map((state) => {
    if (state.id === modal) {
      getState = { ...state };
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
            Each state sets its own quarantine rules for imported plants and
            plant products. There may be conditions for entry of fruit,
            vegetables, nursery plants, seeds etc.
          </p>
          <p>
            The state borders of Western Australia, South Australian and
            Tasmania are monitored by biosecurity staff.
          </p>
          <p>
            Contact the biosecurity authority in the destination state to check
            the entry conditions of your commodity.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
