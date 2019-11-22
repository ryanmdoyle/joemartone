import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const headerStyles = css`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* flex-direction: column; */
`;

// this is also in BurgerNavList, move to external if ok
const listStyles = css`
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: row; 
  li {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    text-align: center;
    color: white;
    text-transform: uppercase;
    margin: 0 1rem;
  }
`;

const Header = (props) => {
  const [screenWidth, setScreenWidth] = useState(0);
  
  useEffect(() => {
    window.addEventListener('resize', () => { setScreenWidth(window.innerWidth) })
    console.log(screenWidth);
  })
  
  return (
    <header css={headerStyles} {...props} >
      {/* <ul css={listStyles} >
      <Link to='/'><li>Bio</li></Link>
      <Link to='/'><li>Resume</li></Link>
      <Link to='/'><li>Instruments</li></Link>
      </ul> */}
      <Link to='/'><img css={css`height: 200px; margin: 0;`} src='http://static1.squarespace.com/static/51a61f4be4b03e3c0127d234/t/55064988e4b0f9921cd75244/1572117101826/?format=1500w' alt='Joe Martone logo' /></ Link>
      {/* <ul css={listStyles} >
      <Link to='/'><li>Lessons</li></Link>
      <Link to='/'><li>Media</li></Link>
      <Link to='/'><li>Contracting</li></Link>
      <Link to='/'><li>Contact</li></Link>
      </ul> */}
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
