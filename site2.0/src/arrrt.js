import React from 'react';
import './arrrt.css';

function Arrrt() {
  const artImages = [
    `${process.env.PUBLIC_URL}/art1.png`,
    `${process.env.PUBLIC_URL}/art2.png`,
    `${process.env.PUBLIC_URL}/art3.png`,
    `${process.env.PUBLIC_URL}/art4.png`,
    `${process.env.PUBLIC_URL}/art5.png`,
    `${process.env.PUBLIC_URL}/art6.png`,
  ];

  return (
    <div className="art-page-body">
      <div className="arrrt-page">
        <div className="logo-container">
          <img
            src={`${process.env.PUBLIC_URL}/logoname.png`}
            alt="Logo"
            className="logo-image"
          />
        </div>

        <p className="intro-text">
          "Woah, thanks for making it this far in my website...<br />
          Anyways, I like to draw on the side. Here is some art I made." - E
        </p>

        <div className="images-container">
          {artImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Art piece ${idx + 1}`}
              className="art-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Arrrt;