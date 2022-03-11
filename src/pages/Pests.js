import React from 'react';
import Pest from "../components/Pest";
import pests from "../data/pests";

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
        <div className="image-container fire-ant-map">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Worldwide_distribution_records_of_Solenopsis_invicta.png/640px-Worldwide_distribution_records_of_Solenopsis_invicta.png"
            }
            alt="fire ant world distribution map"
          />
          <figcaption className="map-caption">
            World distribution of fire ant (<em>Solenopsis invicta</em>). Fire
            ant is a highly invasive ant species from South America and an
            exotic pest to Australia. The red dots shown in Australia represent
            fire ant outbreaks in South East Queensland. The QLD government is
            attempting to contain and eradicate the pest, while other states
            have quarantine laws to reduce the risk of fire ant invasion.
          </figcaption>
        </div>
        <div className="card-container pests">
          {pests.map((pest) => {
            return <Pest key={pest.id} {...pest} />;
          })}
        </div>
        <div className="sub-heading">
          <p>
            <em>
              Hi there! Thanks for looking around. Over time, I want to increase the list
              of pests and include more information about them, like more
              specific location, commodities impacted, and laws and regulations
              concerned.
            </em>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Pests;
