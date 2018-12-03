import React from 'react'
import Link from 'gatsby-link'
import Container from './Container'
import logo from '../images/district.png'


const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundColor: 'white',
      color: 'black',
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      top: 0,
      left: 0,
      border: '1px ridge',
    }}>
    <Container>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: '60'}}>
        <Link style={{display: 'flex', marginRight: '100', height: '100%', alignItems: 'center', textDecoration: 'none'}} to="/">
          <img src={logo} alt="" height="20" vertical-align="middle" />
          <span style={{fontWeight: '700', fontSize: '20'}}>
            {siteTitle}
          </span>
        </Link>
        <nav style={{display: 'flex', flexDirection: 'row', alignItems: 'stretch', overflowX: 'auto', overflowY: 'hidden', height: '100%', width: '60%'}}>
          <Link to="/getting-started/" style={{display: 'flex', marginRight: '50', height: '100%', alignItems: 'center', textDecoration: 'none'}}>Docs</Link>
          <Link to="/tutorial/" style={{display: 'flex', marginRight: '50', height: '100%', alignItems: 'center', textDecoration: 'none'}}>Tutorial</Link>
          <Link to="/community/" style={{display: 'flex', marginRight: '50', height: '100%', alignItems: 'center', textDecoration: 'none'}}>Community</Link>
          <Link to="/blog/" style={{display: 'flex', marginRight: '50', height: '100%', alignItems: 'center', textDecoration: 'none'}}>Blog</Link>
        </nav>
      </div>
    </Container>
  </header>
)

export default Header
