import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <main>
      <div className="container">
        <h3 className="centered mb-2rem">
          Sorry, looks like that page doesn't exist
        </h3>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </main>
  );
};

export default Error;
