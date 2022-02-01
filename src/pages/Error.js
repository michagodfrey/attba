import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
      <div className='container'>
          <h4>Sorry, looks like that page doesn't exist</h4>
          <Link to="/">Back Home</Link>
      </div>
  );
};

export default Error;
