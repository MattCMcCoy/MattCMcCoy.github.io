import { useSharedTheme } from './PageTheme';
import {
  Typography,
  CardMedia,
  CardContent,
  Card,
  SvgIcon,
  Tooltip,
} from '@mui/material';
import { Button } from 'reactstrap';
import clsx from 'clsx';
import { ReactComponent as lock } from '../../images/lock-icon.svg';

import { ReactComponent as CodeBracket } from '../../images/code-bracket.svg';

interface CardProps {
  href: string;
  image: any;
  title: string;
  description: string;
  language: {
    logo: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & { title?: string | undefined }
    >;
    name: string;
  }[];
}

function ProduceCard({ href, image, title, description, language }: CardProps) {
  const { checkedState } = useSharedTheme();

  return (
    <>
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
          <Typography component='div' fontWeight='bold' fontSize={20}>
            {title}
          </Typography>
          <Typography
            component='div'
            fontSize={13}
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
              <Tooltip title={l.name}>
                <SvgIcon
                  component={l.logo}
                  inheritViewBox
                  sx={{
                    fontSize: 40,
                    color: 'white',
                  }}
                />
              </Tooltip>
            );
          })}
          {href ? (
            <Button
              href={href}
              className='sticky bg-transparent border-0 group md:grid md:grid-cols-2 w-11 ml-auto h-9'
              target='_blank'
            >
              <Tooltip title='View the code of this project in GitHub.'>
                <SvgIcon
                  component={CodeBracket}
                  sx={{
                    fontSize: 30,
                    color: 'black',
                    '&:hover': { color: 'white' },
                  }}
                />
              </Tooltip>
            </Button>
          ) : (
            <Tooltip title='This project was made private at my professors request, if you would like to view this code or learn more about it email me. :)'>
              <SvgIcon
                component={lock}
                inheritViewBox
                sx={{
                  fontSize: 40,
                  color: 'slate-600',
                  marginLeft: 'auto',
                }}
              />
            </Tooltip>
          )}
        </div>
      </Card>
    </>
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
