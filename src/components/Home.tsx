import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import drone from '../images/Drone-Video.mp4';
import '../style/Home.css';

export default function Home() {
  const welcomeMessage = [
    'Hey My Name Is Matt! :)\n I Enjoy Photography.',
    2000,
    'Hey My Name Is Matt! :)\n I Enjoy Hiking.',
    2000,
    'Hey My Name Is Matt! :)\n I Enjoy Learning New Things.',
    2000,
    'Hey My Name Is Matt! :)\n I Enjoy Exploring New Places.',
    2000,
  ];
  return (
    <div className='flexbox-container'>
      <video
        className='header_video'
        id='dronevideo'
        src={drone}
        muted={true}
        autoPlay={true}
        playsInline={true}
        loop={true}
      />
      <div className='centered absolute w-[28rem]'>
        <TypeAnimation
          sequence={welcomeMessage}
          speed={2}
          repeat={Infinity}
          wrapper='h2'
          className='whitespace-pre-wrap'
          style={{ fontSize: '3vw' }}
        />
      </div>
    </div>
  );
}
