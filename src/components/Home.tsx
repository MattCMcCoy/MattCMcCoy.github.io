import { TypeAnimation } from 'react-type-animation';
interface MainHomeProps {
  welcomeMessage: (string | number)[];
}
function MainHome({ welcomeMessage }: MainHomeProps) {
  return (
    <div className='flex min-h-screen justify-center items-center'>
      <div className='video-background pointer-events-none'>
        <iframe
          title='droneVideo'
          src='https://www.youtube.com/embed/51vb3znOZrQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=51vb3znOZrQ'
          frameBorder='0'
          seamless
        ></iframe>
      </div>
      <div className='m-auto z-20 block absolute text-center'>
        <TypeAnimation
          sequence={welcomeMessage}
          speed={2}
          repeat={Infinity}
          wrapper='h2'
          className='whitespace-pre-wrap font-bold font-["Gill_Sans"]'
          style={{ fontSize: '4vw' }}
        />
      </div>
    </div>
  );
}

export default function Home() {
  const welcomeMessage = [
    'Hey, my name is Matt!\nI Enjoy Photography.',
    2000,
    'Hey, my name is Matt!\nI Enjoy Hiking.',
    2000,
    'Hey, my name is Matt!\nI Enjoy Flying Drones.',
    2000,
    'Hey, my name is Matt!\nI Enjoy Board Games.',
    2000,
    'Hey, my name is Matt!\nI Enjoy Thai Food.',
    2000,
  ];
  return <MainHome welcomeMessage={welcomeMessage} />;
}
