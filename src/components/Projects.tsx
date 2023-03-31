import DescriptionCard from './component-parts/Card';
import { Grid } from '@mui/material';
import { ReactComponent as TypeScriptLogo } from '../images/typescript.svg';
import { ReactComponent as JavaLogo } from '../images/java.svg';
import { ReactComponent as PythonLogo } from '../images/python.svg';
import { ReactComponent as TailWindLogo } from '../images/tailwind.svg';
import { ReactComponent as ReactLogo } from '../images/react.svg';

const cardContent = [
  {
    href: 'https://github.com/MattCMcCoy/MattCMcCoy.github.io',
    image: require('../images/PortfolioWebsite.png'),
    title: 'Portfolio Website',
    description:
      'This website that I have been developing in my free time to learn React. A main goal of this website was keeping a responsive design so that it works on mobile.',
    language: [
      { logo: TypeScriptLogo, name: 'TypeScript' },
      { logo: ReactLogo, name: 'React' },
      { logo: TailWindLogo, name: 'Tailwind' },
    ],
  },
  {
    href: '',
    image: require('../images/ImageProcessor.png'),
    title: 'Photo Editor',
    description:
      'An image processor in Java utilizing Swing for a GUI and use of command line arguments; the image processor allows the user to load, mutate, and save the image to the users computer.',
    language: [{ logo: JavaLogo, name: 'Java' }],
  },
  {
    href: '',
    image: require('../images/marblesolitaire.png'),
    title: 'Marble Solitaire',
    description:
      'Created a Java version of a Marble Solitaire game that allows a user to play in 3 different styles of board types (English, European, and Triangular).',
    language: [{ logo: JavaLogo, name: 'Java' }],
  },
  {
    href: '',
    image: require('../images/Concentration.png'),
    title: 'Concentration',
    description: 'Created a Java version of the Concentration matching game.',
    language: [{ logo: JavaLogo, name: 'Java' }],
  },
  {
    href: 'https://github.com/MattCMcCoy/AgarIOGame',
    image: require('../images/agario.png'),
    title: 'Agar.io Remake',
    description:
      'A project which entails using OOP principles in order to make a version of the Agar.io online game.',
    language: [{ logo: JavaLogo, name: 'Java' }],
  },

  {
    href: 'https://github.com/MattCMcCoy/ChatProgram',
    image: require('../images/ChatProgram.png'),
    title: 'Chat Program',
    description:
      'Built a multithreaded python chat application that allows multiple users to connect to a local machine.',
    language: [{ logo: PythonLogo, name: 'Python' }],
  },
];

export default function Projects() {
  return (
    <div className='text-center mt-[10vh] text-black absolute z-10'>
      <Grid
        container
        className='rounded-xl w-[100%] h-[100%] justify-center flex'
      >
        {cardContent.map((card) => (
          <Grid>{DescriptionCard(card)}</Grid>
        ))}
      </Grid>
    </div>
  );
}
