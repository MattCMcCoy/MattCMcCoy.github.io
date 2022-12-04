import React from 'react';
import { useSharedTheme } from './PageTheme';
import { Typography, CardMedia, CardContent, Card } from '@mui/material';
import { Button } from 'reactstrap';

import { ReactComponent as CodeBracket } from '../../images/code-bracket.svg';

import '../../style/Card.css';

function ProduceCard({ href, image, title, description }) {
  const { checkedState } = useSharedTheme();

  return (
    <Card className='cardStyle'>
      <CardMedia image={image} className='imageStyle' />
      <CardContent
        className={
          checkedState
            ? 'darkCardContentStyle grid lg:grid-rows-[20px_auto_auto] md:grid-rows-[20px_auto_auto] grid-rows-2 space-y-2'
            : 'cardContentStyle'
        }
      >
        <Typography component='div' fontWeight='bold'>
          {title}
        </Typography>
        <Typography
          component='div'
          variant='caption'
          className={checkedState ? 'dark-card' : 'card'}
        >
          {description}
        </Typography>
        {href ? (
          <Button
            href={href}
            className='sticky bg-slate-600 border-0 group grid grid-cols-2 mt-auto ml-auto h-9 lg:w-32 w-11'
            target='_blank'
          >
            <CodeBracket className='bottom-0 sticky w-5 h-5 group-hover:text-black' />
            <p className='group-hover:text-black lg:block hidden'>GitHub</p>
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}
export function ActionAreaCard({ href, image, title, description }) {
  return (
    <ProduceCard
      href={href}
      image={image}
      title={title}
      description={description}
    />
  );
}
