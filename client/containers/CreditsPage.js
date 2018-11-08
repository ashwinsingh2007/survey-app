import React from 'react';
import { Link } from 'react-router';

const CreditsPage = () => {
  return (
    <div className="credits-page text-center">
      <h6>
        <Link href="https://github.com/ashwinsingh2007" target="_top">
          Contact me
        </Link>
      </h6>
    </div>
  );
};

export default CreditsPage;
