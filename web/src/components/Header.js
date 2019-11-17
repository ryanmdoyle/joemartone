import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useLayoutEffect } from "react"
import { css } from '@emotion/core';

const headerStyles = css`
  background-color: #111;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = ({ siteTitle }) => {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    window.addEventListener('resize', () => {setScreenWidth(window.innerWidth)})
    console.log(screenWidth);
  })
  
  return (
    <header css={headerStyles}>
      <img css={css`height: 100px;`} src='http://static1.squarespace.com/static/51a61f4be4b03e3c0127d234/t/55064988e4b0f9921cd75244/1572117101826/?format=1500w' />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
