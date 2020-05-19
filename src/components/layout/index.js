import React, { Component } from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'
import { Container } from 'reactstrap'

class MainLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Sidebar />
        <Container>
          {this.props.children}
        </Container>
        <Footer />
      </React.Fragment>
    )
  }
}

export default MainLayout
