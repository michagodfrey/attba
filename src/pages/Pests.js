import React from 'react';
import Pest from "../components/Pest";
import pests from "../data/pests";

const Pests = () => {
  return (
    <main>
      <div className="container--pests">
        <div className='textbox'>
          <h1>Pests in Australia</h1>
          <p>
            A pest is a plant, animal or other organism that causes
            environmental, economic or social harm. This site focuses on
            non-vertebrate pests, these are insects, fungi, bacteria and
            other micro-organisms.
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

        <div className="pests-container">
          {pests.map((pest) => {
            return <Pest key={pest.id} {...pest} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Pests;
