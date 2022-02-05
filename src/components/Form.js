import React from 'react';

const Form = () => {
  return (
    <form className="form">
      <div className="form__control">
        <label className="" for="produce">
          Produce
        </label>
        <input id="produce" type="text" />
      </div>

      <div className="form__control">
        <label className="" for="origin">
          Origin
        </label>
        <select className="" id="origin">
          <option value="" selected hidden>
            Where is it from?
          </option>
          <option value="NSW">New South Wales (&amp; ACT)</option>
          <option value="NT">Northern Territory</option>
          <option value="QLD">Queensland</option>
          <option value="SA">South Australia</option>
          <option value="TAS">Tasmania</option>
          <option value="VIC">Victoria</option>
          <option value="WA">Western Australia</option>
        </select>
      </div>

      <div className="form__control">
        <label for="destination">Destination</label>
        <select id="destination">
          <option value="" selected hidden>
            Where is it going?
          </option>
          <option value="NSW">New South Wales (&amp; ACT)</option>
          <option value="NT">Northern Territory</option>
          <option value="QLD">Queensland</option>
          <option value="SA">South Australia</option>
          <option value="TAS">Tasmania</option>
          <option value="VIC">Victoria</option>
          <option value="WA">Western Australia</option>
        </select>
      </div>

      <button id="button" type="button" className='btn'>
        Find out what rules apply
      </button>
    </form>
  );
};

export default Form;
