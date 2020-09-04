import React from 'react';
import './BackgroundVideo.css';

import video from '../assets/carrosnaestradanoite-hd.mp4';

function BackgroundVideo() {
  return (
    <div className="Container">
      <video autoPlay={true} loop={true} className="Video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="Content">
        <div className="SubContent" >
          <h1>Dados colaborativos para transformar o transporte do amanhã.</h1>
        </div>
      </div>
    </div>
  );
}

export default BackgroundVideo;
