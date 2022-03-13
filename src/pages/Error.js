import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <main>
      <div className="content">
        <h3>
          Sorry, looks like that page doesn't exist
        </h3>
        <Link to="/home" className="btn--secondary">
          Back Home
        </Link>
      </div>
    </main>
  );
};

export default Error;
