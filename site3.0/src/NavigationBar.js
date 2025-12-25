import React from 'react';
import './NavigationBar.css'; // We will create this next!

const NavigationBar = () => {
  const iconLinks = {
    github: "https://github.com/iwasella",
  };

  const handleClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const navigateTo = (path) => {
    window.location.hash = path;
  };

  return (
    <div className="window-container">
      <div className="background-with-icons">
        <img
          src={`${process.env.PUBLIC_URL}/navpanel.png`}
          alt="background"
          className="window-background"
        />
        <div className="icon-bar">

        <img
            src={`${process.env.PUBLIC_URL}/home.png`}
            alt="HomePage"
            onClick={() => navigateTo('')}
            className="clickable-icon"
          />

          
          <img
            src={`${process.env.PUBLIC_URL}/CaseStudies.png`}
            alt="CaseStudy"
            onClick={() => navigateTo('/CaseStudies')}
            className="clickable-icon"
          />
          <img
            src={`${process.env.PUBLIC_URL}/githubicon.png`}
            alt="GitHub"
            onClick={() => handleClick(iconLinks.github)}
            className="clickable-icon"
          />
          
          <img
            src={`${process.env.PUBLIC_URL}/arrrt.png`}
            alt="Art"
            onClick={() => navigateTo('/arrrt')}
            className="clickable-icon"
          />

          <img
            src={`${process.env.PUBLIC_URL}/moosicicon.png`}
            alt="Music"
            onClick={() => navigateTo('/music')}
            className="clickable-icon"
          />
          
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;