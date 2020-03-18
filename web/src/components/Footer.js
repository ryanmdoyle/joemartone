// import PropTypes from "prop-types"
import React, { useState } from "react"
import { css } from '@emotion/core';

import SocialLinks from './SocialLinks';

const footerStyles = css`
  background-color: rgba(0, 0, 0, 1);
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Footer = (props) => {
  const [loaded, setLoaded] = useState(false);
  
  // delay render for some weird firefox painting
  window.setTimeout(() => {
    setLoaded(true);
  }, 250);

  return (
    <footer css={footerStyles} {...props}>
      {loaded && <SocialLinks />}
    </footer>
  )
}

export default Footer
