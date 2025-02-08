import React from 'react';

function Header({ logoPath, cursiveText, subHeadingText }) {
  return (
    <div className="text-center mb-4">
      {/* Logo */}
      <img
        src={`${process.env.PUBLIC_URL}/${logoPath}`}
        alt="Campus Cafe Logo"
        className="logo mb-3"
      />
      {/* Cursive subheader */}
      <p className="c-subhead">{cursiveText}</p>
      {/* Subhead */}
      <h2 className="subhead">{subHeadingText}</h2>
    </div>
  );
}

export default Header;
