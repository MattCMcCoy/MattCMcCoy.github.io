import { Component } from 'react';
import NavMenu from './components/NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <>
        <NavMenu />
        {this.props.children}
      </>
    );
  }
}
