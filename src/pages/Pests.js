import React from 'react';
import Pest from "../components/Pest";
import pests from "../data/pests";
import heilothis from "../images/heliothis.jpg";

const Pests = () => {
  return (
    <main>
      <div className="content pest-info">
        <div className="text-container pest-text">
          <h1>Pests in Australia</h1>
          <p>
            A pest is a plant, animal or other organism that causes
            environmental, economic or social harm. This site focuses on
            non-vertebrate pests, these are insects, fungi, bacteria and other
            micro-organisms.
          </p>
          <p>
            There are many thousands of pests in Australia. State quarantine
            laws target "exotic pests" that are from overseas or other states.
          </p>
          <p>
            Below is a non-comprehensive list of exotic pests that states may
            have entry restrictions for.
          </p>
        </div>
        <div className="image-container">
          <img
            className="heliothis-img"
            src={heilothis}
            alt="heliothis caterpillar"
          />
          <figcaption>Caption</figcaption>
        </div>
        <div className="card-container pests">
          {pests.map((pest) => {
            return <Pest key={pest.id} {...pest} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Pests;
