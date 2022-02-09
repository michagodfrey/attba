import React from 'react';
import Pest from "../components/Pest";
import pests from "../data/pests";

const Pests = () => {
  return (
    <main>
      <div className="container">
        <h1>Pests in Australia</h1>
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
