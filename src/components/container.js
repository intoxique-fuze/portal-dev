import React from 'react';

/**
 * This component wraps page content sections (eg header, footer, main).
 * It provides consistent margin and max width behavior.
 */
const Container = ({children}) => (
  <div
    css={{
      paddingLeft: 20,
      paddingRight: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '90%',
      maxWidth: 1260,
    }}>
    {children}
  </div>
);

export default Container;