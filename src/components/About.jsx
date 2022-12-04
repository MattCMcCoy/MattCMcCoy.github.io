import React, { Component } from 'react';
import { ReactComponent as Apple } from '../images/apple.svg';
import { ReactComponent as Windows } from '../images/windows.svg';
import { ReactComponent as VSCode } from '../images/visualstudiocode.svg';
import { ReactComponent as VS } from '../images/visualstudio.svg';
import { ReactComponent as Linux } from '../images/linux-icon.svg';
import { ReactComponent as Python } from '../images/python.svg';
import { ReactComponent as Java } from '../images/java.svg';
import { ReactComponent as Eclipse } from '../images/eclipse.svg';
import { ReactComponent as IntelliJ } from '../images/intellij.svg';
import { ReactComponent as JavaScript } from '../images/javascript.svg';
import { ReactComponent as CSharp } from '../images/c#.svg';
import { ReactComponent as C } from '../images/c.svg';
import { ReactComponent as Git } from '../images/git.svg';
import { ReactComponent as GitHub } from '../images/github.svg';
import { useSharedTheme } from './component-parts/PageTheme';
import clsx from 'clsx';
import { SvgIcon } from '@mui/material';

function AboutMe() {
  const { checkedState } = useSharedTheme();

  const activities = [
    'Aerial photography and videography',
    'Hiking',
    'Board Games',
    'Kayaking',
  ];

  const languages = [
    { language: Java, title: 'Java' },
    { language: CSharp, title: 'C#' },
    { language: JavaScript, title: 'JavaScript' },
    { language: C, title: 'C' },
    { language: Python, title: 'Python' },
  ];
  const tools = [
    { tool: Apple, title: 'Apple' },
    { tool: VSCode, title: 'VSCode' },
    { tool: Git, title: 'Git' },
    { tool: GitHub, title: 'GitHub' },
    { tool: Windows, title: 'Windows' },
    { tool: IntelliJ, title: 'IntelliJ' },
    { tool: VS, title: 'Visual Studio' },
    { tool: Eclipse, title: 'Eclipse' },
    { tool: Linux, title: 'Linux' },
  ];

  return (
    <div className='ml-10 p-10'>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <div id='AboutMe' className='mt-[10vh] mb-10 space-y-7'>
          <div>
            <p>
              <span
                className={clsx('text-xl', checkedState ? '' : 'text-black')}
              >
                Hey my name is
              </span>
              <span className='text-teal-400 text-xl'> Matt McCoy! </span>
            </p>
            <p className={clsx('text-xl', checkedState ? '' : 'text-black')}>
              I am a fourth year
              <span className='text-teal-400'> Computer Science </span>
              student with a concentration in
              <span className='text-teal-400'> Human Centered Computing </span>
              at
              <span className='text-teal-400'> Northeastern University. </span>I
              love learning new things and pushing myself to strive for the very
              best with everything I do.
            </p>
          </div>
          <div>
            <p className={clsx('text-xl', checkedState ? '' : 'text-black')}>
              Apart from coding here are some other things I enjoy:
            </p>
            {activities.map((activity) => (
              <p className='text-lg first-letter:text-sm first-letter:text-white text-teal-400'>
                {`> ${activity}`}
              </p>
            ))}
          </div>
        </div>
        <div className='md:m-10 md:translate-y-[25%]'>
          <img
            src='https://media.giphy.com/media/CuuSHzuc0O166MRfjt/giphy.gif'
            alt=''
          />
        </div>
      </div>
      <div>
        <header
          id='Languages'
          className={clsx('text-3xl', checkedState ? '' : 'text-black')}
        >
          Languages I Know:
        </header>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 space-y-5 mt-5 grid-cols-2'>
          {languages.map((language) => (
            <div className='group'>
              <div
                className={clsx(
                  'text-xl hidden group-hover:block',
                  checkedState ? '' : 'text-black'
                )}
              >
                {language.title}
              </div>
              <SvgIcon
                component={language.language}
                inheritViewBox
                sx={{ fontSize: 150, color: checkedState ? '' : 'black' }}
              ></SvgIcon>
            </div>
          ))}
        </div>
        <header
          id='Tools'
          className={clsx('text-3xl', checkedState ? '' : 'text-black')}
        >
          Tools I Use:
        </header>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 space-y-5 mt-5 grid-cols-2'>
          {tools.map((tool) => (
            <div className='group'>
              <div
                className={clsx(
                  'text-xl hidden group-hover:block',
                  checkedState ? '' : 'text-black'
                )}
              >
                {tool.title}
              </div>
              <SvgIcon
                component={tool.tool}
                inheritViewBox
                sx={{ fontSize: 150, color: checkedState ? '' : 'black' }}
              ></SvgIcon>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export class About extends Component {
  static displayName = About.name;

  render() {
    return <AboutMe />;
  }
}
