import { useSharedTheme } from './PageTheme';
import {
  Typography,
  CardMedia,
  CardContent,
  Card,
  SvgIcon,
} from '@mui/material';
import { Button } from 'reactstrap';
import clsx from 'clsx';

import { ReactComponent as CodeBracket } from '../../images/code-bracket.svg';

interface CardProps {
  href: string;
  image: any;
  title: string;
  description: string;
  language: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >[];
}

function ProduceCard({ href, image, title, description, language }: CardProps) {
  const { checkedState } = useSharedTheme();

  return (
    <Card className='mr-[2vw] ml-[2vw] mb-[2vh] mt-[2vh]'>
      <CardMedia
        image={image}
        className='h-[20vh] w-[40vw] max-w-[300px]'
      ></CardMedia>

      <CardContent
        className={clsx(
          'pt-10 md:h-[30vh] md:w-[40vw] max-h-[250px] max-w-[300px] min-h-[125px] border-0 whitespace-pre-wrap grid lg:grid-rows-[20px_auto_auto] md:grid-rows-[20px_auto_auto] grid-rows-2 space-y-2',
          checkedState ? 'bg-slate-400' : 'bg-sky-200'
        )}
      >
        <Typography component='div' fontWeight='bold'>
          {title}
        </Typography>
        <Typography
          component='div'
          variant='caption'
          className='border-none md:block hidden'
        >
          {description}
        </Typography>
      </CardContent>
      <div
        className={clsx(
          'flex grid-cols-2 pb-2 pr-1 pl-1',
          checkedState ? 'bg-slate-400' : 'bg-sky-200'
        )}
      >
        {language.map((l) => {
          return (
            <SvgIcon
              component={l}
              inheritViewBox
              sx={{
                fontSize: 40,
                color: 'white',
              }}
            />
          );
        })}
        {href ? (
          <Button
            href={href}
            className='sticky bg-slate-600 border-0 group md:grid md:grid-cols-2 w-11 ml-auto h-9 md:w-32'
            target='_blank'
          >
            <CodeBracket className='w-5 h-5 group-hover:text-black' />
            <p className='group-hover:text-black md:block hidden'>GitHub</p>
          </Button>
        ) : null}
      </div>
    </Card>
  );
}

export default function DescriptionCard({
  href,
  image,
  title,
  description,
  language,
}: CardProps) {
  return (
    <ProduceCard
      href={href}
      image={image}
      title={title}
      description={description}
      language={language}
    />
  );
}
