import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useLayoutEffect } from "react"
import { css } from '@emotion/core';

const footerStyles = css`
  background-color: #111;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  color: white;
`;

const Footer = ({ siteTitle }) => {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    window.addEventListener('resize', () => { setScreenWidth(window.innerWidth) })
  })

  return (
    <footer css={footerStyles}>
      <h3>social media shit here</h3>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
