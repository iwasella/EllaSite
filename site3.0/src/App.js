import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Moosic from './Moosic.js';
import Arrrt from './arrrt.js';

function Home() {
  const iconLinks = {
    github: "https://github.com/iwasella",
    hi: "https://youtu.be/BbeeuzU5Qc8?si=TH-kYbqIS52-kiOq",
    linkedin: "https://www.linkedin.com/in/ella-vu-245764255/"
  };

  const handleClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const navigateTo = (path) => {
    window.location.hash = path;
  };

  return (
    <div>
      <img
        className="banner"
        src={`${process.env.PUBLIC_URL}/HelloWorld.png`}
      />

      <div className="window-container">
        <div className="background-with-icons">
          <img
            src={`${process.env.PUBLIC_URL}/navpanel.png`}
            alt="background"
            className="window-background"
          />
          <div className="icon-bar">

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
            <img
              src={`${process.env.PUBLIC_URL}/hitxt.png`}
              alt="Hi"
              onClick={() => handleClick(iconLinks.hi)}
              className="clickable-icon"
            />
            <img
              src={`${process.env.PUBLIC_URL}/linkup.png`}
              alt="LinkedIn"
              onClick={() => handleClick(iconLinks.linkedin)}
              className="clickable-icon"
            />

          </div>

        </div>
      </div>

      <img
        className="AboutMe"
        src={`${process.env.PUBLIC_URL}/EllaStats.png`}
        alt="Ella Vu's about me card"
      />
      <br />

    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Moosic />} />
        <Route path="/arrrt" element={<Arrrt />} />
      </Routes>
    </Router>
  );
}

export default App;