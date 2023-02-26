/// <reference path='../index.d.ts' />;
import { TypeAnimation } from 'react-type-animation';
import ReactPlayer from 'react-player';

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
      <div className='video-background'>
        <iframe
          title='droneVideo'
          src='https://www.youtube.com/embed/mHtdM5ebXaE?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=mHtdM5ebXaE'
          frameBorder='0'
          allowFullScreen
        ></iframe>
      </div>
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
