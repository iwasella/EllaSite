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
            src={`${process.env.PUBLIC_URL}/ArtLogo.png`}
            alt="Logo"
            className="logo-image"
          />
        </div>

        <p className="intro-text">
          Welcome! Drawings, experiments, and fun things<br />
        visual art of mine can be found here!
        </p>

        <div >

          <img
            src={`${process.env.PUBLIC_URL}/Fresco.png`}
            className="VerticalArt"
          />

          <img
            src={`${process.env.PUBLIC_URL}/BlockPrint.png`}
            className="VerticalArt"
          />  

          <img
            src={`${process.env.PUBLIC_URL}/ArtMisc.png`}
            className="DigiArt"
          />  
          <img
            src={`${process.env.PUBLIC_URL}/ManyMisc.png`}
            className="VerticalArt"
          />  

          <img
            src={`${process.env.PUBLIC_URL}/DigitalBanner.png`}
            className="DigiArt"
          /> 


          <img
            src={`${process.env.PUBLIC_URL}/ArtTalk.png`}
            className="VerticalTalk"
          /> 

          <img
            src={`${process.env.PUBLIC_URL}/CatCafe.png`}
            className="VerticalArt"
          /> 
        </div>

        <img
            src={`${process.env.PUBLIC_URL}/Censor.png`}
            className="VerticalTalk"
          /> 

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


        <p className="texting">
          Thank you!
        </p>


      </div>
    </div>
  );
}

export default Arrrt;