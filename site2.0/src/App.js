import logo from './logo.svg';
import './App.css';
import Moosic from './Moosic';

function App() {
  // Define your links here
  const iconLinks = {
    github: "https://github.com/iwasella",
    art: "/art-portfolio",
    music: "/music",
    hi: "https://youtu.be/BbeeuzU5Qc8?si=TH-kYbqIS52-kiOq",
    linkedin: "https://www.linkedin.com/in/ella-vu-245764255/"
  };

  const handleClick = (link) => {
    window.open(link, '_blank'); // Opens link in new tab
  };

  return (
    <div>
      <img
        className="AboutMe"
        src="/aboutme.png"
        alt="A textbox with a profile picture of an individual with long hair and glasses. Her name is Ella Vu.
        Characteristics are listed to the right. They include the school Ella attends: LSU. She majors in Computer Science. Her second discipline is Accounting.
        She minors in Music and Digital Media. Fun facts are that she likes to think about money and likes to eat bread and milk. Her message for you is thank you for visiting the website."
      />

      <div className="window-container">
        <img src="/navback.png" alt="background" className="window-background" />
        <div className="icon-bar">
          <div className="row1">
            <img 
              src="/githubicon.png" 
              alt="GitHub" 
              onClick={() => handleClick(iconLinks.github)} 
              className="clickable-icon"
            />
            <img 
              src="/arrrt.png" 
              alt="Art" 
              onClick={() => handleClick(iconLinks.art)} 
              className="clickable-icon"
            />
            <img 
              src="/moosicicon.png" 
              alt="Music" 
              onClick={() => window.location.href = "/music"} 
              className="clickable-icon"
            />
          </div>
          <div className="row2">
            <img 
              src="/hitxt.png" 
              alt="Hi" 
              onClick={() => handleClick(iconLinks.hi)} 
              className="clickable-icon"
            />
            <img 
              src="/linkup.png" 
              alt="LinkedIn" 
              onClick={() => handleClick(iconLinks.linkedin)} 
              className="clickable-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;