/// <reference path='../index.d.ts' />;
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import drone from '../images/Drone-Video.mp4';
import droneImg from '../images/videoSub.jpeg';

export default function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

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
      <img
        src={droneImg}
        alt='DroneImage'
        style={{ opacity: isVideoLoaded ? 0 : 1 }}
      />
      <video
        className='object-cover w-[100vw] h-[100vh] absolute top-0 left-0 z-10'
        id='dronevideo'
        src={drone}
        muted
        autoPlay
        playsInline
        loop
        onLoadedData={onLoadedData}
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
      >
        drone video
      </video>
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
