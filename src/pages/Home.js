import React from 'react';
import Form from "../components/Form";

const Home = () => {
  return (
    <main>
      <div className="content">
        <div className="text-container">
          <h1>Welcome to Quarantine Query</h1>
          <p>
            Not sure if they'll let you take your delicious home grown peaches
            with you on your Australian travels? What about that bonsai plant
            you want take to your parents across the country? Can your your dog
            come?
          </p>
          <h2>
            This site is for travellers or businesses exporting produce
            subject to Australian interstate quarantine laws.
          </h2>
          <p>
            Sometimes finding these things out is harder than you might expect.
            In general, things are either permitted, prohibited, or can only
            enter the state with a permit or some other condition. 
          </p>
          <hr></hr>
          <h4>A few generalisations:</h4>
          <ul className="list">
            <li className="list__item">
              <div className="svg--tick"></div>
              <span>
                Any processed food is exempt from quarantine rules. This
                includes anything packaged or dried, also dairy and meat if from
                from a retailer like a supermarket.
              </span>
            </li>
            <li className="list__item">
              <div className="svg--cross"></div>
              <span>
                Soil is generally prohibited due to weeds, invasive ants and
                pathogens. However commerical potting mix is allowed but may
                require treatment/certification depending on the state.
              </span>
            </li>
            <li className="list__item">
              <div className="svg--question-mark"></div>
              <span>
                Fresh produce like vegetables and fruit may require
                certification depending on the origin and the destination.
              </span>
            </li>
            <li className="list__item">
              <div className="svg--question-mark"></div>
              <span>
                Cats and dogs can travel freely except dogs arriving in Tasmania have minor requirements.
                Livestock typically require formal documentation and so do less common pets like
                reptiles. 
              </span>
            </li>
          </ul>
        </div>
        <Form />
      </div>
    </main>
  ); 
};

export default Home;
