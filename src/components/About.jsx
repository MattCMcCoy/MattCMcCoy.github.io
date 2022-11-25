import React, { Component } from 'react';
import { ReactComponent as Apple } from '../images/apple.svg';
import { ReactComponent as Windows } from '../images/microsoft.svg';
import { ReactComponent as VSCode } from '../images/visual-studio-code-icon.svg';
import { ReactComponent as Linux } from '../images/linux-icon.svg';
import { ReactComponent as Python } from '../images/python.svg';
import { ReactComponent as Java } from '../images/java.svg';
export class About extends Component {
  static displayName = About.name;

  render() {
    return (
      <div className='p-10 grid grid-rows-2'>
        <div className='grid grid-cols-2'>
          <div className='mt-[10vh] mb-10'>
            <p>
              <span className='text-xl'>Hey my name is </span>
              <span className='text-teal-400 text-xl'>Matt McCoy</span>!
            </p>
            <p>
              <span>I am a fourth year </span>
              <span className='text-teal-400'>Computer Science </span>
              <span>student at </span>
              <span className='text-teal-400'>Northeastern University</span>.
            </p>
            <p>
              <span>With a concentration in </span>
              <span className='text-teal-400'>Human Centered Computing</span>.
            </p>
          </div>
        </div>
        <div>
          <p className='text-xl'>
            Apart from coding here are some other things I enjoy:
          </p>
          <p className='text-teal-400'>
            {'>'} Aerial Photography and Videoography
          </p>
          <p className='text-teal-400'>{'>'} Hiking</p>
          <p className='text-teal-400'>{'>'} Board Games</p>
          <p className='text-teal-400'>{'>'} Kayaking</p>
        </div>
        <header className='text-3xl'>Languages:</header>
        <div className='grid grid-cols-4 mt-5 mb-5'>
          <Python
            style={{ height: 100, width: 100 }}
            className='hover:animate-pulse fill-white'
          />
          <Java
            style={{ height: 100, width: 100 }}
            className='hover:animate-pulse fill-white'
          />
        </div>
        <header className='text-3xl'>Tools I Use:</header>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 space-y-5 mt-5 grid-cols-2'>
          <Apple
            style={{ height: 100, width: 100 }}
            className='hover:animate-pulse'
          />
          <Windows
            style={{ height: 100, width: 100 }}
            className='hover:animate-pulse'
          />
          <VSCode
            style={{ height: 100, width: 100 }}
            className='hover:animate-pulse'
          />
          <Linux
            style={{ height: 100, width: 100 }}
            className='hover:animate-pulse fill-white'
          />
        </div>
      </div>
    );
  }
}
