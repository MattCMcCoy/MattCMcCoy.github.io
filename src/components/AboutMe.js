import React, { Component } from 'react'
import { NavMenu } from './NavMenu'

export class AboutMe extends Component {
  static displayName = AboutMe.name

  render () {
    return (
      <div>
        <NavMenu/>
        Coming Soon.
      </div>
    )
  }
}
