import clsx from 'clsx';
import { useSharedTheme } from './component-parts/PageTheme';
import BigRockHike from '../images/BigRockHike.jpeg';
export default function About() {
  const { checkedState } = useSharedTheme();
  const aboutMeDescription = [
    'Hey my name is Matt McCoy!',
    'I am currently a Fourth Year Computer Science Major at Northeastern University.',
    'My growing love of CS started when I was a child, fascinated with being able to move my characters around this virtual world in video games and seeing these robots being made on my youtube and instagram feed.',
    'I was able to continue this passion through High School taking multiple CS courses even though they were all mainly using a program called Scratch.',
    'Starting at Wentworth Institute of Technology and then crossing the street to Northeastern has opened my eyes to all of the various possibilities the future has in store for me through the many courses I have taken and the Co-Op program at Northeastern.',
    'Besides CS I love hiking, flying drones, board games, thai food, and rock music! :)',
  ];

  return (
    <div className='md:ml-10 p-10'>
      <div className='lg:grid-cols-[500px_auto] grid-cols-1 lg:grid-rows-1 grid'>
        <div className='bg-slate-400 flex w-[80vw] max-w-[500px] max-h-[500px] h-[50vh] md:mt-[20vh] mt-[10vh]'>
          <img
            src={BigRockHike}
            height={'100%'}
            width={'100%'}
            alt='hiking'
            className='p-3'
          />
        </div>
        <div
          id='AboutMe'
          className={clsx(
            'md:mt-[10vh] mb-10 space-y-7 text-3xl font-bold font-sans p-5',
            checkedState ? 'text-white' : 'text-slate-700'
          )}
        >
          About Me
          <div className='text-xl font-serif'>
            {aboutMeDescription.map((line) => (
              <>
                <br />
                <span>{line}</span>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
