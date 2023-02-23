/// <reference path='../index.d.ts' />;
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import drone from '../images/Drone-Video.mp4';
import '../style/Home.css';

export default function Home() {
  const welcomeMessage = [
    'Hey, My Name Is Matt! :)\n I Enjoy Photography.',
    2000,
    'Hey, My Name Is Matt! :)\n I Enjoy Hiking.',
    2000,
    'Hey, My Name Is Matt! :)\n I Enjoy Flying Drones.',
    2000,
    'Hey, My Name Is Matt! :)\n I Enjoy Board Games.',
    2000,
  ];
  return (
    <div className='flex min-h-screen justify-center items-center'>
      <video
        className='header_video'
        id='dronevideo'
        src={drone}
        muted={true}
        autoPlay={true}
        playsInline={true}
        loop={true}
      />
      <div className='m-auto z-20 block absolute'>
        <TypeAnimation
          sequence={welcomeMessage}
          speed={2}
          repeat={Infinity}
          wrapper='h2'
          className='whitespace-pre-wrap font-bold'
          style={{ fontSize: '7vw' }}
        />
      </div>
    </div>
  );
}
