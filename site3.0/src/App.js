import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Moosic from './Moosic.js';
import Arrrt from './arrrt.js';
import CaseStudies from './CaseStudies.js';
import NavigationBar from './NavigationBar';

function Home() {
 

  return (
    <div>
      <img
        className="banner"
        src={`${process.env.PUBLIC_URL}/HelloWorld.png`}
      />  
      
      <NavigationBar />

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
        <Route path="/CaseStudies" element={<CaseStudies />} />
      </Routes>
    </Router>
  );
}

export default App;