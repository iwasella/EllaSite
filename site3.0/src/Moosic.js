import React from 'react'; 
import './App.css';
import './moosic.css';


// --- Reusable Simple Audio Player Component ---
const SimpleAudioPlayer = ({ title, fileName, info, pic, linkUrl }) => {
  const audioUrl = `${process.env.PUBLIC_URL}/${fileName}`;


  const TitleElement = linkUrl ? (
    // Renders as a hyperlink if linkUrl is provided
    <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="track-title-link">
      {title}
    </a>
  ) : (
    // Renders as plain text (or no link) if linkUrl is not provided
    <>{title}</>
  );

  return (
    // 🎯 Replace inline style with className="audio-player-container"
    <div className="audio-player-container"> 
      <h3>{TitleElement}</h3>
      
      <img 
        src={`${process.env.PUBLIC_URL}/${pic}`}
        alt={`Cover image for ${title}`} 
        className="audio-player-image" 
      />
      
      <p>{info}</p>
      <audio controls style={{ width: '100%' }}>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
// ---------------------------------------------


function Moosic() {
  return (
    <div className='moosic-body'>
      <div className="moosic-page">
        <h1>🎵 My Music Page 🎵</h1>
        

        {/* === Player 1: Your Original File === */}
        <SimpleAudioPlayer 
          title="This Town Ain't Big Enough for the Both of us!!"
          fileName="YeHaw.mp3" 
          info="I wanted to go wild with this one."
          pic="horse.jpg"
          linkUrl="https://www.beepbox.co/#9n31s4k1l00e0ct2-a7g0fj07r1i0o432T1v4u01f12leqwx30p727c2gd03d7aA5F5BaQ0001P5f42E4b562663c7iT5v2u05f30o52be1gaq013d06H_-Rzi99ajAKT_Zh0E2174kT1v2u01f226b2d0q023d0aA1F4B3Q217cPa433E31062e7dT4v4u04f112eq012z6666di8k8k3jSBAAAAAArqhDiiii07JCABrzrrrrrrr00YrkqHrsrrrrjr005zrAqzrjzrrqr1jRjrqGGrrzsrsA099ijrABJJJIAzrrtirqrqjqixzsrAjrqjiqaqqysttAJqjrrrrrrrqjtBJJAzAAAAAArrADKSS3rrrrrrrrijsKQg9r99aijsBKSS__0E0b0h4z4igN000id5dDhiw0004id2d44w00018x8i4x000p24UFLhZpyJC5pLh-R0kRf21jbwg5aq_Jd7Fqz9i5rcL7YZNdRtT4ZwbLMldKPltljntrAkRkQSYNljrnwe1pe2pm0RkVuTIRQRkSrdmnORuWbjKptuNnnKSQRgc50Qq45hjAkYTImmTkRRkTk2Q2RyQ2RAuMbgbkbpkbub8yOgJgJt0KXAS4toJ0J0KEbibibghQlTl2Q2QkyTnyM8GrnXVqyQmUmYmwmAmy-AmwmwmwldMv5CZ7OllC1nJVI80kOy0mQmAmQFFclCk3AFjaisjHi6s4bBRU40bBSR2R2QyT2R5ejmihV4V9jg0"
        />

        {/* === Player 2: Your New File (Replace 'NewTrack.mp3'!) === */}
        <SimpleAudioPlayer 
          title="Behind the Sun's Smile"
          fileName="BehindTheSunsSmile.mp3"
          info="To be honest, I was thinking of getting lost in a McD0n@lds playroom, and the lights turn off ToT."
          pic="scare.jpg"
          linkUrl="https://www.beepbox.co/#9n31s0k6l00e0ct1Ua7g0cj07r0i0o432T1v3u01f0qwx10l613d0aA0F0B0Q38e0Pa013E3b8618626T1v6u01f20t524dq012d28A0F3B7Q0201Pf536E26327jT5v6u05f10m8q013d2aHdJJJqh90000000h4E21h44T3v6u03f12r0qwx20n526403d08SSS_-JIArrqih980E1b6b4x4Ak6tE0x8Q1Bs8018hd4hmu84h4x8jh00p25jFE-17khGpv7P8Gqf1Ejs7wGqfQZb2RsLzYvBkjnYaqDN-A97h9iCNuOCPbNaVeKQOZVmRpnpyVwJoKjoHCnKY5PcatyyywLV5ID8D9bYysD8D9bYyNqp5FAlCUfyrdKYkFCyj5FJTVjioKJuoJmB19KrMqCL-LM6jsvMCR-arQvBGmrQvyTsillldKZ4TyfldKZGqj5PeJerFLh-ljn_nUECU_xdHYmrQvEdV95dK-4TyftdKZIHNjciPa1k5ja92VZ5dsyVoJ8KluiVB8CxsInbKNsInbKOCGGSG8-W5Gaq1qj5F5Fd6wQqqYAnQ6aPoFcCmCL8FJQICUAwUY0"
        />


      </div>
    </div>
  );
}

export default Moosic;