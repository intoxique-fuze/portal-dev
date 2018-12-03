import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Sidebar from '../components/sidebar'
import './index.css'

const Layout = ({ children, data }) => (
  <div style={{display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'auto'}}> 
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'District Developer Portal' },
        { name: 'keywords', content: 'District, Developer, Portal' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div style={{display: 'flex'}}>
      <Sidebar />
      <div style={{flex: '1', alignContent: 'center'}}>
        {children()}
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
