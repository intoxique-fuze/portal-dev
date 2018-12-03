import React from 'react'
import Link from 'gatsby-link'
import Container from './Container'

const Sidebar = () => (
    <div style={{width: '250', height: '800', borderRight: '1px ridge', overflow: 'scroll'}}>
      <header>Quick Start</header>
      <ul>
        <li><Link to="/getting-started">Getting Started</Link></li>
      </ul>
      <header>About</header>
      <ul>
        <li><Link to="/about">About us</Link></li>
      </ul>
      <header>Contact us</header>
      <ul>
        <li><Link to="/contactus">Contact Us</Link></li>
      </ul>
    </div>
)

export default Sidebar