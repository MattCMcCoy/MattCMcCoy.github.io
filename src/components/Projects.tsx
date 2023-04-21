import DescriptionCard, { CardProps } from './component-parts/Card';
import { Grid } from '@mui/material';
import { ReactComponent as TypeScriptLogo } from '../images/typescript.svg';
import { ReactComponent as JavaLogo } from '../images/java.svg';
import { ReactComponent as PythonLogo } from '../images/python.svg';
import { ReactComponent as TailWindLogo } from '../images/tailwind.svg';
import { ReactComponent as ReactLogo } from '../images/react.svg';

interface JSONCardProps {
  href: string;
  image: string;
  title: string;
  description: string;
  language: {
    name: string;
  }[];
}
export default function Projects() {
  const jsonProjects: JSONCardProps[] = require('../json-files/Projects.json');

  const _projects = jsonProjects.map(
    (project) =>
      ({
        href: project.href,
        image: require(`../images/${project.image}`),
        title: project.title,
        description: project.description,
        language: project.language.map((language) =>
          getDisplayLanguage(language)
        ),
      } as CardProps)
  );
  return (
    <div className='text-center mt-[10vh] text-black absolute z-10'>
      <Grid
        container
        className='rounded-xl w-[100%] h-[100%] justify-center flex'
      >
        {_projects.map((card) => (
          <Grid key={card.title}>{DescriptionCard(card)}</Grid>
        ))}
      </Grid>
    </div>
  );
}

/**
 * Gets the language of a given project language to be displayed
 * @param language the project language to turn to the SVG symbol and name
 * @returns the symbol and name or null if none is found
 */
function getDisplayLanguage(language: { name: string }): {
  logo: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  name: string;
} | null {
  switch (language.name) {
    case 'TypeScript':
      return { logo: TypeScriptLogo, name: language.name };
    case 'Python':
      return { logo: PythonLogo, name: language.name };
    case 'Java':
      return { logo: JavaLogo, name: language.name };
    case 'React':
      return { logo: ReactLogo, name: language.name };
    case 'Tailwind':
      return { logo: TailWindLogo, name: language.name };
  }
  return null;
}
