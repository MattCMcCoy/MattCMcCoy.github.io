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
  language: any[];
}

function ProduceCard({ href, image, title, description, language }: CardProps) {
  const { checkedState } = useSharedTheme();

  return (
    <Card className='mr-[2vw] ml-[2vw] mb-[2vh] mt-[2vh] group'>
      <CardMedia
        image={image}
        className='h-[20vh] w-[30vw] max-w-[300px]'
      ></CardMedia>

      <CardContent
        className={clsx(
          'pt-10 md:h-[30vh] md:w-[30vw] max-h-[250px] max-w-[300px] min-h-[125px] border-0 whitespace-pre-wrap grid lg:grid-rows-[20px_auto_auto] md:grid-rows-[20px_auto_auto] grid-rows-2 space-y-2',
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
        <div className='flex grid-cols-2 mt-auto'>
          {language.map((l) => {
            return (
              <SvgIcon
                component={l}
                inheritViewBox
                sx={{
                  fontSize: 40,
                  color: 'white',
                  '&:hover': { color: 'black' },
                }}
              />
            );
          })}
          {href ? (
            <Button
              href={href}
              className='sticky bg-slate-600 border-0 group grid grid-cols-2  ml-auto h-9 lg:w-32'
              target='_blank'
            >
              <CodeBracket className='bottom-0 sticky w-5 h-5 group-hover:text-black' />
              <p className='group-hover:text-black'>GitHub</p>
            </Button>
          ) : null}
        </div>
      </CardContent>
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
