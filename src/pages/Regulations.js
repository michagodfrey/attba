import React from "react";
import States from "../components/States";
import StateModal from "../components/StateModal";
import states from "../data/states";
import { useGlobalContext } from "../context";
import StatesList from "../components/StatesList";

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
      <div className="content regs-grid">
        <div className="text-container regs-text">
          <h2>Intrastate biosecurity in Australia</h2>
          <p>
            Here biosecurity refers to protection of plants and animals from
            pests and diseases. While this generally does not involve human
            health, preventing the spread of plant and animal pests/diseaese has
            economic, environmental and social benefits.
          </p>
          <div className="image-container">
            <img
              className="heliothis-img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/CSIRO_ScienceImage_260_The_Cotton_Pest_Heliothis.jpg/640px-CSIRO_ScienceImage_260_The_Cotton_Pest_Heliothis.jpg"
              alt="heliothis caterpillar"
            />
            <figcaption className="heliothis-caption">
              Heliothis, a caterpillar that feeds on crops like corn and cotton.
              It is a significant agricultural pest but since it is spread
              throughout Australia, it is not targeted by local quarantine laws.
              That is, it's an <em>endemic</em> pest.
            </figcaption>
          </div>
          <p>
            As an Island, Australia has a natural advantage to keep unwanted
            organisms out of the country. However, Australia is a large country
            with ecosystems isolated from each other by desert or water. So just
            as there are quaratine rules and checks at the Australian border,
            each Australian state has its own biosecurity laws.
          </p>
          <div className="image-container">
            <img
              className="state-border-img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Welcome_to_Victoria.jpg/640px-Welcome_to_Victoria.jpg"
              alt="fire ant world map"
            />
            <figcaption></figcaption>
          </div>

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
        <div className="states-container">
          <h3>click on a state to view more</h3>
          <States />
        </div>
        <StatesList />
      </div>
    </main>
  );
};

export default Regulations;
