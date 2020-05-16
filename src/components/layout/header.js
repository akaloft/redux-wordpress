import React from 'react'
import { Container } from 'reactstrap'
import { siteTitle } from '../../helper/variable'
import NavbarMenu from './menu'

function Header() {
  return (
    <React.Fragment>
      <header className="header">
        <Container fluid>
          <div className="d-flex justify-content-between align-items-center">
            <div className="header-left">
              <h1 className="site-title">{siteTitle}</h1>
            </div>
            <div className="header-center"></div>
            <div className="header-right">
              <NavbarMenu />
            </div>
          </div>
        </Container>
      </header>
    </React.Fragment>
  )
}

export default Header
