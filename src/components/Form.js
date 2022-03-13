import React, { useState, useEffect } from 'react';

// not currently in use. But future versions will use a form to find specific conditons 
// depending on commodity, origin and destination
const Form = () => {

  const [commodity, setCommodity] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(commodity);
    console.log(origin);
    console.log(destination);
  }

  useEffect(() => {
    console.log('this renders on mount');
  }, [commodity])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Select the goods you want to take across state lines.</h4>
        <div className="radio-buttons">
          <label htmlFor="fruit">Fruit</label>
          <input
          className="fruit"
            type="radio"
            id="fruit"
            value="fruit"
            name="commodity"
            onChange={(e) => setCommodity(e.target.value)}
          ></input>
          <label htmlFor="vegetables">Vegetables</label>
          <input
            type="radio"
            id="vegetables"
            value="vegetables"
            name="commodity"
            onChange={(e) => setCommodity(e.target.value)}
          ></input>

          <label htmlFor="plants">Plants</label>
          <input
            type="radio"
            id="plants"
            value="plants"
            name="commodity"
            onChange={(e) => setCommodity(e.target.value)}
          ></input>
        </div>
        <div className="svg--fruit"></div>
        <div className="svg--veg"></div>
        <div className="svg--plant"></div>

        <div className="select-box">
          <label htmlFor="origin">Origin</label>
          <select id="origin" onChange={(e) => setOrigin(e.target.value)}>
            <option hidden>Where is it from?</option>
            <option value="NSW">New South Wales (&amp; ACT)</option>
            <option value="NT">Northern Territory</option>
            <option value="QLD">Queensland</option>
            <option value="SA">South Australia</option>
            <option value="TAS">Tasmania</option>
            <option value="VIC">Victoria</option>
            <option value="WA">Western Australia</option>
          </select>
          <label htmlFor="destination">Destination</label>
          <select
            id="destination"
            onChange={(e) => setDestination(e.target.value)}
          >
            <option hidden>Where is it going?</option>
            <option value="NSW">New South Wales (&amp; ACT)</option>
            <option value="NT">Northern Territory</option>
            <option value="QLD">Queensland</option>
            <option value="SA">South Australia</option>
            <option value="TAS">Tasmania</option>
            <option value="VIC">Victoria</option>
            <option value="WA">Western Australia</option>
          </select>
        </div>

        <button id="button" type="submit" className="btn">
          Find out what rules apply
        </button>
      </form>
      <div className="output">
        <p>
          You intend to take {commodity} from {origin} to {destination} 
        </p>
      </div>
    </div>
  );
};

export default Form;
