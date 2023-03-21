import { Component } from 'react';
import NavMenu from './components/NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className='absolute h-[100vh]'>
        <div className='sticky top-0 z-20'>
          <NavMenu />
        </div>
        {this.props.children}
      </div>
    );
  }
}
