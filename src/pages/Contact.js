import React from 'react';
import States from "../components/States";
import StateModal from '../components/StateModal';

const Contact = () => {
  
  return (
    <main>
      <StateModal />
      <div className="container row">
        <div className="states-container">
          <States />
        </div>
        <div className="test">
          <h2>Intrastate biosecurity in Australia</h2>
          <h4>Click on each state to get an overview of that state's rules.</h4>
          <p>
            Each state sets its own quarantine rules for imported plants and
            plant products. The conditions for entry depends on what plant pests
            and diseases the destination state is trying to keep out. For
            example, you can move a bottle brush plant from Queensland to
            Victora without any restrictions. But if you take that bottle brush
            tree to South Australia without permission, you will be stopped at
            the border and the plant would likely be confiscated and you'd
            probably be fined too.
          </p>
          <p>
            Use this site to help work out what you need to avoid fines and
            other disruptions.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
