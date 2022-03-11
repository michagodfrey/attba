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
      <div className="content">
        <div className="text-container">
          <h2>Interstate biosecurity in Australia</h2>
          <div className="regs-grid">
            <p className="p-1">
              Here biosecurity refers to protection of plants and animals from
              pests and diseases. While this generally does not involve human
              health, preventing the spread of plant and animal pests/diseaese
              has economic, environmental and social benefits. To preserve these
              goods, Commonwealth and state governments regulate entry of
              potential carriers of pests and diseases, such as fruit,
              vegetables, plants, animals, agricultural machinery and soil.
            </p>
            <div className="image-container img-fruit-bin">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Fruit_Fly_Disposal_Bin_at_Entrace_to_Fruit_Fly_Exclusion_Zone_-_panoramio.jpg/1024px-Fruit_Fly_Disposal_Bin_at_Entrace_to_Fruit_Fly_Exclusion_Zone_-_panoramio.jpg"
                alt="fruit fly disposal bin"
              />
              <figcaption>
                <strong>Fruit fly disposal bin</strong>. Some states and special
                quarantine zones don't allow fresh fruit to be brought in. This
                is to keep out fruit fly, a major agriculural pest whose larvae
                (maggots) destroy fruit.
              </figcaption>
            </div>
            <p className="p-2">
              As an Island, Australia has a natural advantage to keep out
              unwanted pests. However, Australia is a large country with
              ecosystems isolated from each other by desert or water. So just as
              there are quaratine rules and checks at Australia's international
              borders, each Australian state has its own biosecurity laws to
              protect local industies.
            </p>
            <div className="image-container img-biosecurity-officer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/CBP_Agriculture_Specialist_Conducts_Pepper_Inspections_at_an_El_Paso_Port_of_Entry_%2820662608030%29.jpg/1024px-CBP_Agriculture_Specialist_Conducts_Pepper_Inspections_at_an_El_Paso_Port_of_Entry_%2820662608030%29.jpg"
                alt="biosecurity professional looking through microscope"
              />
              <figcaption>
                <strong>Biosecurity officer</strong> inspects fruit at a
                checkpoint.
              </figcaption>
            </div>
            <p className="p-3">
              State biosecurity regulations are strategic and control for
              specific unwanted pests that are absent from the state. For
              example, Tasmania does not have fruit fly inside its borders and
              this is good for Tasmania as it means fruit growers use less
              pesticides and can access more markets. That is, fruit fly is an{" "}
              <em>exotic</em> pest to Tasmania and biosecurity controls are in
              place to maintain this. While since fruit fly has established in
              most of mainland Australia it is classed as <em>endemic</em> and
              may not have quarantine controls.
            </p>
            <div className="image-container img-heliothis">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/CSIRO_ScienceImage_260_The_Cotton_Pest_Heliothis.jpg/1024px-CSIRO_ScienceImage_260_The_Cotton_Pest_Heliothis.jpg"
                alt="heliothis caterpillar"
              />
              <figcaption className="heliothis-caption">
                <strong>Heliothis</strong>, or cotton bollworm is a caterpillar
                that feeds on crops like corn and cotton. It is a significant
                agricultural pest but since it is <em>endemic</em> and spread
                throughout Australia it would be pointless to try to control it
                with state quarantine laws.
              </figcaption>
            </div>
            <p className="p-4">
              Contact the biosecurity authority in the destination state to
              check the entry conditions of your commodity. Some states have
              monitored borders with checkpoints to inspect organic goods for
              pest infetation or the accompanying permits products entering the
              state.
            </p>
          </div>
        </div>
        <div className="sub-heading">
          <h3>State biosecurity authorities</h3>
          <p>
            <em>
              Thanks for checking out this project. I would love your feedback.
              This section will be expanded to include more information about
              the biosecurity departments with links to quarantine laws along
              with step by step guidance to using these resources.
            </em>
          </p>
        </div>
        <div className="states-container">
          <h4>click on a state to view more</h4>
          <States />
        </div>
        <StatesList />
      </div>
    </main>
  );
};

export default Regulations;
