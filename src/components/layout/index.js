import React, { Component } from 'react'
import Header from './header'
import Sidebar from './sidebar'

class MainLayout extends Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <Sidebar />
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default MainLayout
