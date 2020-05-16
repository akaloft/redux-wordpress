import React, { Component } from 'react'
import Header from './header'

class MainLayout extends Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default MainLayout
