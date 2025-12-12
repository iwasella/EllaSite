import React from 'react'; 
import './App.css';
import './moosic.css';

// --- Reusable Simple Audio Player Component ---
const SimpleAudioPlayer = ({ title, fileName,info,pic }) => {
  // Use the reliable PUBLIC_URL method to construct the path
  const audioUrl = `${process.env.PUBLIC_URL}/${fileName}`;

  return (
    <div style={{ margin: '15px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>{title}</h3>
      <img src={`${process.env.PUBLIC_URL}/${pic}`}
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
        />

        {/* === Player 2: Your New File (Replace 'NewTrack.mp3'!) === */}
        <SimpleAudioPlayer 
          title="Behind the Sun's Smile"
          fileName="BehindTheSunsSmile.mp3"
          info="To be honest, I was thinking of getting lost in a McD0n@lds playroom, and the lights turn off ToT."
          pic="scare.jpg"
        />


      </div>
    </div>
  );
}

export default Moosic;